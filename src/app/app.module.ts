import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components:
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component'
import { ProductsListComponent } from './components/products-list.component'
import { ProductAddComponent } from './components/product-add.component';

// Routes:
import { routing, appRoutingProviders } from './app.routing';

// Services
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    ErrorComponent, 
    ProductsListComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule, routing,HttpClientModule, FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
