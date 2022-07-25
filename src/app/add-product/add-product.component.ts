import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductCategoryService } from '../services/product-category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProduct:any;
  productsCategory: any;
  category: string="";
  constructor(private fb:FormBuilder, private routes:Router, private productService:ProductService, private productCategoryService:ProductCategoryService) { 
    this.addProduct=fb.group(
      {
        nomProd:['',Validators.required],
        description:['',Validators.required],
        quantiteProd:['',Validators.required],
        productCategoryId:['',Validators.required],
        prix:['',Validators.required],
        image:['',Validators.required],
      }
    )
  }

  ngOnInit(): void {
    this.loadProductCategory();
  }

  loadProductCategory(){
    this.productCategoryService.listProductCategory().subscribe((data:any)=>{
      console.log(data);
      this.productsCategory=data;
    });
  }
  onSubmit(){ 
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>"+this.category);
    console.log(this.addProduct.value);
    this.productService.addProduct(this.addProduct.value,this.category).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(["/product"])
    });

  }

}
