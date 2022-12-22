from . import IlSema, IlceSema
from .ma import ma
from model import Adres


class AdresSema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Adres
        load_instance = True
    il = ma.Nested(IlSema)
    ilceler = ma.Nested(IlceSema)

