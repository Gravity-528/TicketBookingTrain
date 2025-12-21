from pydantic import BaseModel

class FetchTrain(BaseModel):
    start:str
    destination:str
    trainId:str