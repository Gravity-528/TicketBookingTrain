from sqlalchemy import String, Integer, Column, DATE, DATETIME, ForeignKey, Enum
from database import Base
import uuid

class Booking(Base):
    __tablename__ = "bookings"

    bookingId = Column(String, primary_key=True, index=True,default=lambda: str(uuid.uuid4()))
    trainId = Column(String, ForeignKey("train.trainId"))
    startTime = Column(DATETIME)
    endTime = Column(DATETIME)
    seatId = Column(String,ForeignKey("seats.seatId"))
    status = Column(String)
    couponId = Column(String, ForeignKey("coupon.couponId"))
