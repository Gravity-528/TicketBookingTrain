from fastapi import FastAPI
from database import engine, Base
from redis.asyncio import Redis
from dotenv import load_dotenv
import os
import razorpay

load_dotenv()

app = FastAPI()
redis=Redis.from_url(os.getenv("REDIS_URL"))

razorpay_client=razorpay.Client(auth=(os.getenv("RAZORPAY_KEY_ID"),os.getenv("RAZORPAY_KEY_SECRET")))

Base.metadata.create_all(bind=engine)


@app.get("/")
async def hello():
    return {"message": "hello world"}