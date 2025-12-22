from main import redis
from schema.selected_seat import seatToBook
import uuid
from .CouponService import CouponService
from model.Booking import Booking


# trainId = Column(String, ForeignKey("train.trainId"))
#     startTime = Column(DATETIME)
#     endTime = Column(DATETIME)
#     seatId = Column(String,ForeignKey("seats.seatId"))
#     status = Column(String)
#     couponId = Column(String, ForeignKey("coupon.couponId"))


SEAT_LOCK_LUA = """

for i, key in ipairs(KEYS) do
    if redis.call("EXISTS", key) == 1 then
        return 0
    end
end

for i, key in ipairs(KEYS) do
    redis.call("SET", key, ARGV[1], "EX", ARGV[2])
end

return 1

"""


class BookingService:
    
    async def BookTicket(self,seat_to_book:seatToBook,total:int):
        
        seat_keys=[f"{seat_to_book.train_id}+{x}" for x in seat_to_book.selected_seat]

        request_id=uuid.uuid4()

        result=await redis.eval(
           SEAT_LOCK_LUA,
           len(seat_keys),
           *seat_keys,
           request_id,
           14*60
        )
        if(result==0):
            raise Exception("some seat is already booked")
        
        coupon=CouponService()
        reduced_cost=coupon.apply_coupon(seat_to_book.coupon_info,seat_to_book.total)

        for x in seat_to_book.selected_seat:
            book=Booking(
                trainId=seat_to_book.train_id,
                startTime=seat_to_book.start_time,
                endTime=seat_to_book.end_time,
                seatId=x,
                status='Pending',
                couponId=seat_to_book.coupon_info.couponId
            )

        
        pass