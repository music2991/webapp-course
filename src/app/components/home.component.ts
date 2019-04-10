import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: '../views/home.html'
})

export class HomeComponent{
    public title: string;

    constructor(){
        this.title = 'Products webapp with Angular 7!!'
    }

    ngOnInit(){
        console.log('Component home was uploades successfully!')
    }
}