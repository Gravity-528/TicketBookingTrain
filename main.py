from fastapi import FastAPI
from database import engine, Base
from redis.asyncio import Redis
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()
redis=Redis.from_url(os.getenv("REDIS_URL"))

Base.metadata.create_all(bind=engine)


@app.get("/")
async def hello():
    return {"message": "hello world"}