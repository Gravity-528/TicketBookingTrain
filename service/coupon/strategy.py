from abc import ABC,abstractmethod

class couponType(ABC):

    @abstractmethod
    def apply_discount(self,base_fare,discount):
        pass


class PercentDiscount(couponType):
    def apply_discount(self, base_fare, discount):
        return base_fare-(base_fare*discount)/100
    

class FlatDiscount(couponType):
    def apply_discount(self, base_fare, discount):
        return base_fare-discount