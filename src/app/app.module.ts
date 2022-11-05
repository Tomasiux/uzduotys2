import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { Routes,RouterModule } from '@angular/router';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { AboutComponent } from './components/about/about.component';


const appRoutes:Routes=[
  {path:'',    component:CartComponent},
  {path:'new',component:AddProductComponent},
  {path:'about',component:AboutComponent},
  {path:'edit/:id',component:EditProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    AddProductComponent,
    NavigationComponent,
    EditProductComponent,
    CartSummaryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
