from pydantic import BaseModel

class Selected_seat(BaseModel):
    seatId:str
    price:int

class seatToBook(BaseModel):
    selected_seat:list[Selected_seat]
    total:int
    train_id:str