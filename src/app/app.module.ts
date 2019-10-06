import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {RatingModule} from 'ng-starrating';
import { ClickproductComponent } from './clickproduct/clickproduct.component';
import { CartComponent } from './cart/cart.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import {RouterModule} from '@angular/router';
import { Lab2Component } from './lab2/lab2.component';
import { Lab2DetailComponent } from './lab2-detail/lab2-detail.component';
import { Lab3Component } from './lab3/lab3.component';
import { Lap3ListproductComponent } from './lap3-listproduct/lap3-listproduct.component';
import { Lap04Component } from './lap04/lap04.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Lap05Component } from './lap05/lap05.component'; 
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ClickproductComponent,
    CartComponent,
    ListstudentComponent,
    Lab2Component,
    Lab2DetailComponent,
    Lab3Component,
    Lap3ListproductComponent,
    Lap04Component,
    Lap05Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    RatingModule ,
    NgxPaginationModule,
    BrowserModule, 	
	  RouterModule.forRoot([ 
	  { path: 'khai', 	component: ProductComponent }, 
	{path: 'product', component:ProductComponent},
  { path: 'product/:productid', component: ClickproductComponent },
  { path: 'liststudent', component: ListstudentComponent },
  { path: 'lab2', component: Lab2Component},
  { path: 'lab2/detail/:id', component: Lab2DetailComponent},
  { path: 'lab3', component: Lab3Component},
  { path: 'lab3-listproduct', component: Lap3ListproductComponent},
  { path: 'lab05', component:Lap05Component},
  ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
