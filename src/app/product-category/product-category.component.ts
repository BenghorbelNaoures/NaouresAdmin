import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategoryService } from '../services/product-category.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  products: any;
  categorie:any;
  category:any;
  searchText:any;
  constructor(private productCategoryService:ProductCategoryService, private routes:Router) { }

  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct(){
    this.productCategoryService.listProductCategory().subscribe((data:any)=>{
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
  
  editProductCategory(data:any){

  }
  deleteProduct(datas:any){
    this.productCategoryService.deleteProductCategory(datas._id).subscribe(data=>{
      console.log(data);
      this.products=this.products.filter((u:any)=>u!==datas)
      //this.routes.navigate(["/product"])
    })
  }

}
