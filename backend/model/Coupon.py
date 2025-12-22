from sqlalchemy import String,Integer,Column,DATE,DATETIME,Enum
from backend.database import Base

class Coupon(Base):
    __tablename__="coupons"

    couponId=Column(String,primary_key=True,index=True)
    discount=Column(Integer)
    type=Column(Enum(["Flat","Percentage"]))
    description=Column(String(100))
    deadline=Column(DATETIME)
    min_fare=Column(Integer)
