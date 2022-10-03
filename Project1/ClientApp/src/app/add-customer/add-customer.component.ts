import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CustomerViewModel } from '../shared/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
})
export class AddCustomerComponent implements OnInit {
   
    public baseUrl: string = 'https://localhost:44325/api/customer'
    public http: HttpClient;
    public customer: CustomerViewModel;
    public service: CustomerService;
    constructor(service: CustomerService, http: HttpClient, @Inject('SPORTS_API_URL')
    baseUrl: string) {
        this.customer = new CustomerViewModel();
        this.http = http;
        this.service = service;
    }

  ngOnInit() {
  }

    onSave() {


        alert("this submited");
        alert(this.customer.customerName);


        const headers = {
            'access-Control-Allow-Headers': 'Accept',
            'access-control-allow-origin': '*/*',
            'Content-Type': 'application/json;charset=utf-8',
        };
        const body = {
            customerName: this.customer.customerName,
            contactNumber: this.customer.contactNumber,
            customerEmailId: this.customer.customerEmailId,
            customerAddress: this.customer.customerAddress,
        };

        this.service.addCustomer(this.customer).subscribe((data) => {
            console.log(data); alert(data);
        });

        //this.http.post<ApiResponse>(this.baseUrl, body, { headers }).subscribe((data) => {
        //    console.log(data); alert(data);
        //});
    }
}


//export class CustomerViewModel {
//    public customerId: number;
//    public customerName: string;
//    public contactNumber: string;
//    public customerEmailId: string;
//    public customerAddress: string;
//}

interface ApiResponse {
    isValid: boolean;
    statusMessage: string;
    errorMessage: string;
    result: Array<CustomerViewModel>;
}