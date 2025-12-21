from abc import ABC,abstractmethod
from coupon.strategy import FlatDiscount,PercentDiscount


def FactoryCoupon(discount_type:str):
    if discount_type=="percentage":
        return PercentDiscount()
    
    elif discount_type=="flat":
        return FlatDiscount()

    raise ValueError("incorrect coupon type")    
    

