# Carrari

<p align="center">
	<img alt="Carrari logo" src="https://gitlab.com/chris.hem10/project-beta/-/raw/1caaea4d5c158deefed5b66e2b2a6fb5a911647b/ghi/app/public/images/carrari.png">
</p>

## Sample Images 

![Models Page](https://gitlab.com/chris.hem10/project-beta/-/raw/main/ghi/app/public/images/models.png)
![Sales History Page](https://gitlab.com/chris.hem10/project-beta/-/raw/main/ghi/app/public/images/saleshistory.png)
![Add Vehicle Page](https://gitlab.com/chris.hem10/project-beta/-/raw/main/ghi/app/public/images/addvehicle.png)
![Appointment Page](https://gitlab.com/chris.hem10/project-beta/-/raw/main/ghi/app/public/images/appointment.png)


Team:

* Christopher Hem - Sales Microservice
* Mayank Kohli - Service Microservice

## Design

## Service microservice
The Service microservice contains multiple models: ServiceAppointment, AutomobileVO and Technician. These will communicate with the inventory database that was created and via polling, it will message to and from when the user creates a new technician, fills out the service appointment form and goes in and looks for the appontment history. The forms then allow the user to input the information and return a list of all the required fields at the end. Users also are able to view the history of the services by typing in the VIN number that is associated with the service appointment in order to look at each one separately. 

## Sales microservice

Sales microservice includes the following models: SalesPerson, Customer, and SalesRecord. These models communicate with the inventory database through a polling message system in order to create a new customer, new sale, and new salesperson. The forms will allow the user to input the appropriate information and renders a list of it all once completed. Users will also have the ability to view and filter sales of a particular salesperson as well. 

