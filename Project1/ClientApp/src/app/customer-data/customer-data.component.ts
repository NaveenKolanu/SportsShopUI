import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CustomerViewModel, ApiResponse } from '../shared/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html'
})
export class CustomerDataComponent {
    public apiResponse: ApiResponse;
    public customers: CustomerViewModel[];
    public customer: CustomerViewModel;

    public showAddNew = false;
    public showEdit = false;

    constructor(private service : CustomerService) {
        
        this.service.getAllCustomers<ApiResponse>().subscribe((data) => {
            console.log(data);
            this.apiResponse = data;
            this.customers = data.result;
            this.customer = new CustomerViewModel();
        });
    }

    onAddNew() {
        this.showAddNew = true;
        this.showEdit = false;
        this.customer = new CustomerViewModel();
    }

    onEdit(customerId) {
        this.showAddNew = false;
        this.showEdit = true;
        this.customer = this.customers.find(p => p.customerId == customerId);
    }

    onDelete(customerId) {
        this.saveDelete(customerId);
    }


    //On Save or Update
    saveAddNew() {
        this.service.addCustomer(this.customer).subscribe(data => { console.log(data); alert(data); });
        this.refreshData();
    }

    saveUpdate() {
        this.service.updateCustomer(this.customer).subscribe(data => { console.log(data); alert(data);});
    }

    saveDelete(customerId) {
        this.service.deleteCustomer(customerId).subscribe(data => { console.log(data); alert(data); });
    }

    refreshData() {

        this.service.getAllCustomers<ApiResponse>().subscribe((data) => {
            console.log(data);
            this.apiResponse = data;
            this.customers = data.result;
            this.customer = new CustomerViewModel();
        });
    }
}
