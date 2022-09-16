from django.urls import path
from .views import (
    api_list_sales_person, 
    api_show_sales_person, 
    api_list_customer, 
    api_show_customer, 
    api_list_sales,
    api_show_sales,
    api_show_salesperson_history,
    api_for_sale
)

urlpatterns = [
    path("salesperson/", api_list_sales_person, name="api_list_sales_person"),
    path("salesperson/<int:pk>/", api_show_sales_person, name="api_show_sales_person"),
    path("customer/", api_list_customer, name="api_list_customer"),
    path("customer/<int:pk>/", api_show_customer, name="api_show_customer"),
    path("sales/", api_list_sales, name="api_list_sales"),
    path("sales/<int:pk>/", api_show_sales, name="api_show_sales"),
    path("sales/employee/<int:pk>", api_show_salesperson_history, name="api_show_salesperson_history"),
    path('automobiles/forsale/', api_for_sale, name="api_for_sale")
]
