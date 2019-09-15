import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'ng-starrating';
import { ClickproductComponent } from './clickproduct/clickproduct.component';
import { CartComponent } from './cart/cart.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import {RouterModule} from '@angular/router';
import { Lab2Component } from './lab2/lab2.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ClickproductComponent,
    CartComponent,
    ListstudentComponent,
    Lab2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    RatingModule ,
    BrowserModule, 	
	  RouterModule.forRoot([ 
	  { path: '', 	component: ProductComponent }, 
	{path: 'product', component:ProductComponent},
  { path: 'product/:productid', component: ClickproductComponent },
  { path: 'liststudent', component: ListstudentComponent },
	{ path: '**', redirectTo: 'product', pathMatch: 'full' },
  ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
