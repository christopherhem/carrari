from .models import SalesPerson, Customer, AutomobileVO, SalesRecord
from common.json import ModelEncoder


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "import_href",
    ]

class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id", 
        "name", 
        "employee_number",
    ]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "name",
        "address",
        "phone_number",
    ]

class SalesRecordListEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "id",
        "automobile",
        "sales_person", 
        "customer",
        "sales_price",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonListEncoder(),
        "customer": CustomerListEncoder(),
    }

class SalesRecordDetailEncoder(ModelEncoder):
    model = SalesRecord
    properties = [ 
        "id",
        "automobile",
        "sales_person",
        "customer",
        "sales_price"
    ]
    
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonListEncoder(),
        "customer": CustomerListEncoder(),
    }