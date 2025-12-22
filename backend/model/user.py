from sqlalchemy import Column,Integer,String
from database import Base

class User(Base):
    __tablename__="users"

    userId=Column(Integer,primary_key=True,index=True)
    username=Column(String(100),unique=True)
    password=Column(String(100))
    name=Column(String(100))
    