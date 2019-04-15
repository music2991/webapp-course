import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { GLOBAL } from './global';

@Injectable()
export class ProductService{
    public url: string;
    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
        //this.url = 'https://jsonplaceholder.typicode.com/posts';
    }

    getProducts(){
        return this._http.get(this.url + 'Product').pipe(map(res => res));
        //return this._http.get(this.url).pipe(map(res => res));
    }

    addProduct(product: Product){
        let payload = JSON.stringify(product);
        let header = new Headers({
            'Content-Type':'application/x-www-form-urlencoded'
        });
    }
}

