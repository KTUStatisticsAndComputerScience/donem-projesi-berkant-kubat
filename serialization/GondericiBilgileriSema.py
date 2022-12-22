from .ma import ma
from model import GondericiBilgileri


class GondericiBilgileriSema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = GondericiBilgileri
        load_instance = True
