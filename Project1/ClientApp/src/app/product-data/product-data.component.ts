import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { ProductViewModel } from '../shared/product.model';
import { ApiResponse } from '../shared/customer.model';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html'
})
export class ProductDataComponent {
    public product: ProductViewModel;
    public products: ProductViewModel[];
    public service: ProductService;

    public showAddNew= false;
    public showUpdate= false;
    public showSave= false;

    constructor(service: ProductService) {
        this.product = new ProductViewModel();
        this.service = service;
        this.refreshData();
    }

    onSave() {
        
        this.service.addProduct(this.product).subscribe((data) => {
            console.log(data); alert(data);
            //this.refreshData(); //server reload
            if (data.isValid) { //client reload
                this.products.push(this.product);
                this.product = new ProductViewModel();
            }
        });
    }

    onEdit(productId: number) {
        this.showUpdate = true;
        this.product = this.products.find(p => p.productId == productId);
    }
    saveAddNew() { }

    saveEdit() {
        this.service.updateProduct<ApiResponse>(this.product).subscribe(data => {
            if (data.isValid) { 
                this.product = new ProductViewModel();
            }
        });
    }

    refreshData() {
        this.service.getAllProducts<ApiResponse>().subscribe((data) => {
            console.log(data);
            this.products = data.result;
        }, error => console.error(error));

    }

}