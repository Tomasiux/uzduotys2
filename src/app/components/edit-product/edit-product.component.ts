import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public name:string|null=null;
  public quantity:number|null=null;
  public id:number;
  public type:string|null=null;

  constructor(
    private route:ActivatedRoute,
    private productsService:ProductsService,
    private router:Router,
  ) { 
    this.id=route.snapshot.params['id'];
    const p=this.productsService.getProduct(this.id);
    this.name=p.name;
    this.quantity=p.quantity;
    this.type=p.type;
  }

  ngOnInit(): void {
  }

  public onSaveClick(){
    if (this.name && this.type && this.quantity){
       this.productsService.saveProduct(this.id,this.name,this.quantity,this.type);
       this.router.navigate(["/"]);
    }
  }

}
