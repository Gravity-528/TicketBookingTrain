from sqlalchemy import String,Integer,Column,DATE,DATETIME
from database import Base

class Train(Base):
    __tablename__="trains"

    trainId=Column(String,primary_key=True,index=True)
    trainName=Column(String(100))
    startTime=Column(DATETIME)
    source=Column(String(100))
    destination=Column(String(100))
