from sqlalchemy import String,Integer,Column,DATE,DATETIME,Enum
from backend.database import Base
import uuid

class Coupon(Base):
    __tablename__="coupons"

    couponId=Column(String,primary_key=True,index=True,default=lambda:str(uuid.uuid4()))
    couponName=Column(String(100),unique=True)
    discount=Column(Integer)
    type=Column(Enum(["Flat","Percentage"]))
    description=Column(String(100))
    deadline=Column(DATETIME)
    min_fare=Column(Integer)
