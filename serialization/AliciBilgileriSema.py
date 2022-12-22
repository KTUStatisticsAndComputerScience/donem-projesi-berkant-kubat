from . import AdresSema
from .ma import ma
from model import AliciBilgileri


class AliciBilgileriSema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = AliciBilgileri
        load_instance = True

    adresler=ma.Nested(AdresSema)