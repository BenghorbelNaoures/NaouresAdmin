import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategoryService } from '../services/product-category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  categorie:any;
  category:any;
  constructor(private productService:ProductService, private productCategoryService:ProductCategoryService, private routes:Router) { }

  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct(){
    this.productService.listProduct().subscribe((data:any)=>{
      console.log(data);
      this.products=data;
    });
  }
  loadCtegory(id:any){
    this.productCategoryService.oneProductCategory(id).subscribe((data:any)=>{
      console.log(data);
      this.category=data;
  
    });
  }
  
  editProduct(data:any){

  }
  deleteProduct(datas:any){
    this.productService.deleteProduct(datas._id).subscribe(data=>{
      console.log(data);
      this.products=this.products.filter((u:any)=>u!==datas)
      //this.routes.navigate(["/product"])
    })
  }

}
