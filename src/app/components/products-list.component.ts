import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
    selector: 'product-list',
    templateUrl: '../views/products-list.html',
    providers: [ProductService]
})

export class ProductsListComponent {
    public title: string;
    public products: Product[];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService
    ){
        this.title = 'Products List';
    }

    ngOnInit(){
        console.log('products-list component ready!');

        this._productService.getProducts().subscribe(
            response => {
                console.log("* We are in the response proccesing")
                this.products = <Product[]>response;
            },
            err => {
                console.log("Error:" + err);
            }
        );
    
    }
}

/*


            result => {
                this.articles = result
                if (!this.articles){
                    console.log("Server error");
                }
            },
            error => {
                var errorMsg = <any>error
                console.log(errorMsg)
                console.log(error)
            }
*/