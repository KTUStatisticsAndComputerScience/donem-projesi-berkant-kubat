from .ma import ma
from model import SubeBilgileri


class SubeBilgileriSema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = SubeBilgileri
        load_instance = True
