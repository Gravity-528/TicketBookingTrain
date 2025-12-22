from pydantic import BaseModel
from datetime import datetime
from .coupon_schema import Coupon_schema

class Selected_seat(BaseModel):
    seatId:str

class seatToBook(BaseModel):
    selected_seat:list[Selected_seat]
    total:int
    train_id:str
    start_time:datetime
    end_time:datetime
    coupon_info:Coupon_schema
