from sqlalchemy import String,Integer,Column,DATE,DATETIME,ForeignKey,Enum
from database import Base

class Schedule(Base):
    __tablename__="schedules"

    schedule_id=Column(String,primary_key=True,index=True)
    stationId=Column(String,ForeignKey("stations.stationId"))
    time=Column(DATETIME)
    trainId=Column(String,ForeignKey("trains.trainId"))
