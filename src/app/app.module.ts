import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components:
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component'
import { ProductsListComponent } from './components/products-list.component'

// Routes:
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    ErrorComponent, 
    ProductsListComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
