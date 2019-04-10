import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'product-list',
    templateUrl: '../views/products-list.html',
    providers: [ProductService]
})

export class ProductsListComponent {
    public title: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService
    ){
        this.title = 'Products List';
    }

    ngOnInit(){
        console.log('products-list component ready!')

        alert(this._productService.getProducts());
    }
}