import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { ApiResponse } from '../shared/customer.model';
import { ProductViewModel } from '../shared/product.model';


@Injectable({ providedIn: 'root', })
export class ProductService {
    baseUrl: string = 'https://localhost:44325/api/Product';
    constructor(private http: HttpClient, @Inject('SPORTS_API_URL') baseUrl: string) {
        this.baseUrl = baseUrl + 'api/Product';
    }

    getAllProducts<something>() {
        return this.http.get<something>(this.baseUrl);
    }
    getProduct(productId:number) {
        return this.http.get<ApiResponse>(this.baseUrl + '?productId=' + productId);
    }

    addProduct(product: ProductViewModel) {

        //prepare Headers
        const headers = {
            'access-Control-Allow-Headers': 'Accept',
            'access-control-allow-origin': '*/*',
            'Content-Type': 'application/json;charset=utf-8',
        };
        //prepare data;
        const body = {
            productName: product.productName,
            productPrice: product.productPrice,
            productColor: product.productColor,
            productSize: product.productSize,
        };
        return this.http.post<ApiResponse>(this.baseUrl, body, {headers});
    }

    updateProduct<TResp>(product: ProductViewModel) {
        //prepare Headers
        const headers = {
            'access-Control-Allow-Headers': 'Accept',
            'access-control-allow-origin': '*/*',
            'Content-Type': 'application/json;charset=utf-8',
        };
        //prepare data;
        const body = {
            productId: product.productId,
            productName: product.productName,
            productPrice: product.productPrice,
            productColor: product.productColor,
            productSize: product.productSize,
        };
        return this.http.put<TResp>(this.baseUrl, body, { headers });
    }
}