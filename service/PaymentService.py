from main import razorpay_client

class PaymentService:
    def create_order(self,amount:int):
        currency="INR"

        order_data={
            "amount":amount,
            "currency":currency
        }

        razorpay_order=razorpay_client.order.create(data=order_data)
        return razorpay_order['id']
        ##here return {"order_id": razorpay_order['id'],"amount":amount}
        ## checkout page in frontend ..react use krke
    pass