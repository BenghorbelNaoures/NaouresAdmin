import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductCategoryService } from '../services/product-category.service';

@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-product-category.component.html',
  styleUrls: ['./add-product-category.component.css']
})
export class AddProductCategoryComponent implements OnInit {

  addProductCategory:any;

  constructor(private fb:FormBuilder, private routes:Router, private productCategoryService:ProductCategoryService) { 
    this.addProductCategory=fb.group(
      {
        libelle:['',Validators.required],
        isActive:['',Validators.required]
      }
    )
  }

  ngOnInit(): void {
    this.loadProductCategory();
  }

  loadProductCategory(){

  }
  onSubmit(){
    console.log(this.addProductCategory.value);
    this.productCategoryService.addProductCategory(this.addProductCategory.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(["/productCategory"])
    });

  }
}
