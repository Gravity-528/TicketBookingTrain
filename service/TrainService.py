from sqlalchemy.orm import Session,aliased
from model import Train,Schedule,Station
from pydantic import BaseModel
from schema.Train_schema import FetchTrain
from datetime import datetime


class TrainService:

    def fetch_train(self,db:Session,data:FetchTrain):
       
        current_time=datetime.now()

        startId=db.query(Station.stationId).filter(
            Station.stationName==data.start
        )

        destinationId=(db.query(Station.stationId).filter(
            Station.stationName==data.destination
        ))

        S1=aliased(Schedule)
        S2=aliased(Schedule)
        available_train=(db.query("*")
        .join(S2,S1.trainId==S2.trainId)
        .filter(
            S1.time<S2.time,
            S1.time> current_time,
            S1.stationId==startId,
            S2.stationId==destinationId
           )
        )

        return available_train
        