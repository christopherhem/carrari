from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from django.http import JsonResponse

from .models import SalesPerson, Customer, AutomobileVO, SalesRecord

from .encoders import (
    AutomobileVOEncoder, 
    SalesPersonListEncoder, 
    CustomerListEncoder,
    SalesRecordListEncoder,
    SalesRecordDetailEncoder 
)

# Create your views here.
@require_http_methods(["GET", "POST"])
def api_list_sales_person(request):
    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_persons": sales_person},
            encoder=SalesPersonListEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.create(**content)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonListEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Unable to create salesperson."}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_sales_person(request, pk):
    if request.method == "GET":
        sales_person = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonListEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = SalesPerson.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        SalesPerson.objects.filter(id=pk).update(**content)
        sales_person = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonListEncoder,
            safe=False
        )

@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerListEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerListEncoder,
            safe=False
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_customer(request, pk):
    if request.method == "GET":
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=CustomerListEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = CustomerListEncoder.objects,filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0 })
    else:
        content = json.loads(request.body)
        Customer.objects.filter(id=pk).update(**content)
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=CustomerListEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = SalesRecord.objects.all()
        print(sales)
        return JsonResponse(
            {"sales": sales},
            encoder = SalesRecordListEncoder,
        )
    else:
        content = json.loads(request.body) 
        try: 
            vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=vin)
            print("HELLOOOOOOOOO")
            print(automobile)
            content["automobile"] = automobile 

            employee_number = content["sales_person"]
            sales_person = SalesPerson.objects.get(employee_number=employee_number)
            content["sales_person"] = sales_person

            customer_name = content["customer"]
            customer = Customer.objects.get(name=customer_name)
            content["customer"] = customer

            sales_record = SalesRecord.objects.create(**content)
            return JsonResponse(
                sales_record,
                encoder=SalesRecordListEncoder,
                safe=False,
            )
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Vehicle id"},
                status = 400,
            )
        
        
@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_sales(request, pk):
    if request.method == "GET":
        sales = SalesRecord.objects.get(id=pk)
        return JsonResponse(
            sales,
            encoder=SalesRecordListEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = SalesRecordListEncoder.objects,filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0 })
    else:
        content = json.loads(request.body)
        SalesRecord.objects.filter(id=pk).update(**content)
        sales = SalesRecord.objects.get(id=pk)
        return JsonResponse(
            sales,
            encoder=SalesRecordListEncoder,
            safe=False,
        )

@require_http_methods(["GET"])
def api_show_salesperson_history(request, pk):
    if request.method == "GET":
        try:
            sales_person = SalesRecord.objects.filter(sales_person=pk)
            return JsonResponse(
                sales_person,
                encoder=SalesRecordListEncoder,
                safe=False
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                {"message":"Sales record does not exist."},
                status=400
            )




