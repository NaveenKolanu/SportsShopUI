import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CustomerViewModel } from '../shared/customer.model';

@Injectable({ providedIn: 'root',})
export class CustomerService {
    private baseUrl: string;
    constructor(
        private http: HttpClient, @Inject('SPORTS_API_URL') baseUrl: string
    ) {
        this.baseUrl = baseUrl + 'api/customer';
    }

    getAllCustomers<Res>() {
        return this.http.get<Res>(this.baseUrl);
    }

    getCustomer(customerId:string) {
        return this.http.get(this.baseUrl + '?customerId=' + customerId);
    }

    addCustomer(customer: CustomerViewModel) {

        //prepare Headers
        const headers = {
            'access-Control-Allow-Headers': 'Accept',
            'access-control-allow-origin': '*/*',
            'Content-Type': 'application/json;charset=utf-8',
        };
        //prepare data;
        const body = {
            customerName: customer.customerName,
            contactNumber: customer.contactNumber,
            customerEmailId: customer.customerEmailId,
            customerAddress: customer.customerAddress,
        };
        return this.http.post(this.baseUrl, body, { headers });
    }

    updateCustomer(customer: CustomerViewModel) {

        //prepare Headers
        const headers = {
            'access-Control-Allow-Headers': 'Accept',
            'access-control-allow-origin': '*/*',
            'Content-Type': 'application/json;charset=utf-8',
        };
        //prepare data;
        const body = {
            customerId: customer.customerId,
            customerName: customer.customerName,
            contactNumber: customer.contactNumber,
            customerEmailId: customer.customerEmailId,
            customerAddress: customer.customerAddress,
        };
        return this.http.put(this.baseUrl, body, { headers });
    }

    deleteCustomer(customerId: number) {
        return this.http.delete(this.baseUrl + "?customerId=" + customerId);
    }

}