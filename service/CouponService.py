from sqlalchemy.orm import Session
from model import Booking,Coupon
from datetime import datetime
from schema.coupon_schema import Coupon_schema
import uuid
from .coupon.factory import FactoryCoupon
from .coupon.validator import expiryValidator,min_fare_check


class CouponService:
    
    def fetch_all_coupons(self,db:Session):
        nowTime=datetime.now()
        all_coupon=db.query(Coupon).filter(
           Coupon.deadline > nowTime
        ).all()

        return all_coupon
    
    def fetch_coupon_by_id(self,db:Session,couponId):
        coupon=db.query(Coupon).filter(
            Coupon.couponId==couponId
        )

        return coupon
    
    def create_coupon(self,db:Session,coupon_data:Coupon_schema):

        coupon=Coupon(
            couponId=f"{coupon_data.type}-{str(uuid.uuid4)}",
            discount=coupon_data.discount,
            type=coupon_data.type,
            description=coupon_data.description,
            deadline=datetime.now(),
            min_fare=coupon_data.min_fare
        )

        db.add(coupon)
        db.commit()
        db.refresh(coupon)

    def apply_coupon(self,coupon_data:Coupon_schema,fare:int):

        expiry=expiryValidator()
        min_fare=min_fare_check()

        expiry.set_next(min_fare)

        expiry.validate(coupon_data,fare)

        coupon_strategy=FactoryCoupon(coupon_data.type)

        return coupon_strategy.apply_discount(fare,coupon_data.discount)

    
