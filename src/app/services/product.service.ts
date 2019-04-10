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
        console.log("createddddddddddddddddddddddd");
    }

    getProducts(){
        console.log("function executed")
        return 'text from service';
    }
}