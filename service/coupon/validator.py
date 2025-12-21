from abc import ABC,abstractmethod

class Validator(ABC):

    def __init__(self):
        self.next_validator=None

    def set_next(self,validator):
        self.next_validator=validator
        return validator
    
    def validate(self,coupon,fare):
        pass

class expiryValidator(Validator):
    def validate(self,coupon,fare):
        expired=False

        if expired==False:
            raise Exception("coupon is expired")
        
        if self.next_validator:
            return self.next_validator.validate(self,coupon,fare)
