from sqlalchemy import String,Integer,Column,DATE,DATETIME,Enum
from database import Base

class Coupon(Base):
    __tablename__="coupons"

    couponId=Column(String,primary_key=True,index=True)
    discount=Column(Integer)
    type=Column(Enum(["Flat","Percentage"]))
    description=Column(String(100))
