from abc import ABC,abstractmethod
from sqlalchemy.orm import Session
from pydantic import BaseModel
from datetime import datetime
from model import Coupon

class Coupon_schema(BaseModel):
    couponId:str
    discount:int
    type:str
    description:str
    deadline:datetime
    min_fare:int


class Validator(ABC):

    def __init__(self):
        self.next_validator=None

    def set_next(self,validator):
        self.next_validator=validator
        return validator
    
    def validate(self,coupon:Coupon_schema,fare):
        pass

class expiryValidator(Validator):
    def validate(self,coupon:Coupon_schema,fare):
        
        # search_coupon=db.query(Coupon).filter(
        #     Coupon.couponId==coupon.couponId
        # )
        
        nowTime=datetime.now()
        expired=False

        if(nowTime>=coupon.deadline):
            expired=True

        if expired==True:
            raise Exception("coupon is expired")
        
        if self.next_validator:
            return self.next_validator.validate(self,coupon,fare)

class min_fare_check(Validator):
    def validate(self, coupon:Coupon_schema, fare):
        if(fare<coupon.min_fare):
            raise Exception("apply minimum fare")
        
        if self.next_validator:
            return self.next_validator.validate(self,coupon,fare)
        
