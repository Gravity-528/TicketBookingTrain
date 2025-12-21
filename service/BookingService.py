from main import redis
from schema.selected_seat import seatToBook
import uuid


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
        ## use redis to store entry with setnx with ttl of 12 min
        
        seat_keys=[f"{seat_to_book.train_id}+{x}" for x in seat_to_book.selected_seat]

        request_id=uuid.uuid4()

        result=await redis.eval(
           SEAT_LOCK_LUA,
           len(seat_keys),
           *seat_keys,
           request_id,
           12*60
        )
        if(result==0):
            raise Exception("some seat is already booked")
        

        ## make entry in booking table with pending status
        ## proceed to razorpay payment ans wait for webhook
        ## update entry in the table as reserved
        pass