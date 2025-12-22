from pydantic import BaseModel
from datetime import datetime

class Coupon_schema(BaseModel):
    couponId:str
    discount:int
    type:str
    description:str
    deadline:datetime
    min_fare:int