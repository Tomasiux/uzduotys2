import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products:Product[]=[];

  constructor(private productService:ProductsService) { 
      this.products=productService.products;
  }

  ngOnInit(): void {
  }

  public deleteProduct(n:number){
    this.productService.deleteProduct(n);
  }

}
