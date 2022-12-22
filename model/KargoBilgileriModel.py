import datetime

from sqlalchemy import Column, Integer, ForeignKey, DateTime, String
from .db import db


class KargoBilgileri(db.Model):
    __tablename__ = 'kargoBilgileri'

    id = Column(Integer, primary_key=True)
    kargo_id=Column(Integer, ForeignKey('kargo.id'))
    alici_id = Column(Integer, ForeignKey('aliciBilgileri.id'))
    gonderici_id = Column(Integer, ForeignKey('gondericiBilgileri.id'))
    sube_id = Column(Integer, ForeignKey('subeBilgileri.id'))
    kargo_tarihi = Column(DateTime,default=datetime.datetime.utcnow())
    kargo_odemeTuru = Column(String)
