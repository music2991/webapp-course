import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

    constructor(
        private _productService: ProductService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.title = "Create new Product";
        this.product = new Product(0, "", "", "", "")
    }

    ngOnInit(){
        console.log("component uploaded: ProductAdd...")
    }

    onSubmit(){
        //console.log(this.product)
        this._productService.addProduct(this.product).subscribe(
            response => {
                if( response.status == 200 ){
                    this._router.navigate(['/products']);
                } else {
                    console.log("Error in response: ");
                    console.log(response);
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }
}
