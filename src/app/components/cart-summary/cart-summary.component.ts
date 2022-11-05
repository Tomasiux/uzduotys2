import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  public count:number=0;
  public sum:number=0;

  constructor(private productsService:ProductsService) { 
    this.calculate();
    productsService.productsUpdate.subscribe(()=>{
      this.calculate();
    });

  }

  private calculate(){
    const products=this.productsService.products;
    this.count=products.length;
    this.sum=0;
    products.forEach((product)=>{
      this.sum+=product.quantity;
    });
  }

  ngOnInit(): void {
  }

}
