from .ma import ma
from model import Ilce


class IlceSema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Ilce
        load_instance=True
