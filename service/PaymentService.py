from main import razorpay_client
import datetime

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
                "info": "info"
            }
        }

        razorpay_order=razorpay_client.payment_link.create(data=order_data)
        return razorpay_order['id']
        ##{"order_id": razorpay_order['id'],"amount":amount}
        ## checkout page ka link add krna h....react use krke
    