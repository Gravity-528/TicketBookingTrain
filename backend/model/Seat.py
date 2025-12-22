from sqlalchemy import String,Integer,Column,DATE,DATETIME
from database import Base

class Seat(Base):
    __tablename__="seats"

    seatId=Column(String,primary_key=True,index=True)
    seatName=Column(String(100))
    price=Column(Integer)
