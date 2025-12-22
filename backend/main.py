from fastapi import FastAPI,Request
from backend.database import engine, Base
from redis.asyncio import Redis
from dotenv import load_dotenv
import os
import razorpay
import json
from .service.PaymentService import PaymentService

payment=PaymentService()

load_dotenv()

app = FastAPI()
redis=Redis.from_url(os.getenv("REDIS_URL"))

razorpay_client=razorpay.Client(auth=(os.getenv("RAZORPAY_KEY_ID"),os.getenv("RAZORPAY_KEY_SECRET")))

Base.metadata.create_all(bind=engine)


@app.get("/")
async def hello():
    return {"message": "hello world"}

@app.post("/webhook")
async def webhook_handler(request:Request):
    webhook_body=request.data.decode('utf8')
    razorpay_signature=request.headers.get(os.getenv('x-razorpay-signature'))

    if not razorpay_signature:
        return ({"status": "error", "message": "No signature header"}), 400
    
    try:
       is_authentic=razorpay_client.utility.verify_webhook(webhook_body,razorpay_signature,os.getenv('WEBHOOK_SECRET'))

       if is_authentic:
           event_payload=json.loads(webhook_body)
           event_type=event_payload['event']

           if event_type=="payment_link.paid":
               response=payment.payment_captured()
               pass
           if event_type=="payment_link.expired":
               response=payment.payment_expired()
               pass
           if event_type=="payment_link.cancelled":
               response=payment.payment_cancelled()
               pass

    except Exception as e:
        raise Exception("error in webhook comming")