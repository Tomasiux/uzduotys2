import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public name:string|null=null;
  public quantity:number|null=null;
  public type:string|null=null;

  constructor(
    private productService:ProductsService,
    private router:Router
  ) { 

  }

  ngOnInit(): void {
  }

  public addProduct(){
    if (this.name!=null && this.type!=null && this.quantity!=null){
      this.productService.addProduct(this.name, this.quantity, this.type);
      this.name=null;
      this.quantity=null;
      this.type=null;
      this.router.navigate(["/"]);

    }
  }

}
