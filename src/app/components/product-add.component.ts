import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// Services
import { ProductService } from '../services/product.service';
// Models
import { Product } from '../models/product';

@Component({
    selector: 'product-add',
    templateUrl: '../views/product-add.html',
    providers: [ProductService]
})

export class ProductAddComponent{
    public title: string;
    public product: Product;

    constructor(){
        this.title = "Create new Product";
        this.product = new Product(0, "", "", "", "")
    }

    ngOnInit(){
        console.log("component uploaded: ProductAdd...")
    }

    onSubmit(){
        console.log(this.product)
    }
}
