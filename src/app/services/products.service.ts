import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _products:Product[]=[];
  private _productsUpdate=new EventEmitter();

  constructor() {
   
   }

   public addProduct(name:string,quantity:number,type:string){
    this._products.push(new Product(name, quantity, type));
    this.save();
    this._productsUpdate.emit();
   }

   public deleteProduct(n:number){
    this._products.splice(n,1);
    this.save();
    this._productsUpdate.emit();
   }

   public getProduct(n:number){
    return this._products[n];
   }

   public saveProduct(n:number,name:string,quantity:number,type:string){
    this._products[n]={name:name, quantity:quantity, type:type};
    this.save();
    this._productsUpdate.emit();
   }

   public get products(){
    return this._products;
   }

   public get productsUpdate(){
    return this._productsUpdate;
   }

   public save(){
    localStorage.setItem("products", JSON.stringify(this._products));
   }

   public load(){
    const data=localStorage.getItem("products");
    if (data!=null){
      this._products=JSON.parse(data);
    }
   }

}
