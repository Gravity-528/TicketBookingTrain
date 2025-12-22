from backend.main import razorpay_client
import datetime
from sqlalchemy.orm import Session
from model import Booking

class PaymentService:
    def create_order(self,amount:int):
        currency="INR"

        expire_time= datetime.datetime.now()+datetime.timedelta(minutes=10)

        order_data={
            "amount":amount,
            "currency":currency,
            "expire_by": expire_time,
            "customer":{
                "userId":"abc",
                "info": "info",
                "bookingIds":["booking1"],
            }
        }
        try:
           razorpay_order=razorpay_client.payment_link.create(data=order_data)
        except Exception as e:
            raise Exception("some error in creating order link")
        return razorpay_order['short_url']
        ##{"order_id": razorpay_order['id'],"amount":amount}
        ## checkout page ka link add krna h....react use krke

    def payment_captured(self,db:Session,userId,bookingId):
        search=db.query(Booking).filter(
            Booking.bookingId==bookingId
        )
        pass

    def payment_expired():
        pass

    def payment_cancelled():
        pass
    