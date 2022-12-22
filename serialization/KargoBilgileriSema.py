from . import AliciBilgileriSema, GondericiBilgileriSema, KargoSema
from .ma import ma
from model import KargoBilgileri


class KargoBilgileriSema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = KargoBilgileri
        load_instance = True
    aliciBilgileri = ma.Nested(AliciBilgileriSema)
    gondericiBilgileri = ma.Nested(GondericiBilgileriSema)
    kargo= ma.Nested(KargoSema)