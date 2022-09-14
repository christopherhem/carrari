from django.db import models

# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200)
    import_href = models.CharField(max_length=200, unique=True, null=True)

    def __str__(self):
        return self.vin

class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=20, null=True)

    def __str__(self):
        return self.name

class SalesRecord(models.Model):
    automobile = models.ForeignKey(AutomobileVO, related_name="automobile", on_delete=models.PROTECT)

    sales_person = models.ForeignKey(SalesPerson, related_name="sales_person", on_delete=models.PROTECT)

    customer = models.ForeignKey(Customer, related_name="customer", on_delete=models.PROTECT)

    sales_price = models.CharField(max_length=25)

    def __str__(self):
        return f'{self.sales_person} sold {self.automobile} to {self.customer} for {self.sales_price}'
