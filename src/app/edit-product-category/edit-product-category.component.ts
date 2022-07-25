import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategoryService } from '../services/product-category.service';

@Component({
  selector: 'app-edit-product-category',
  templateUrl: './edit-product-category.component.html',
  styleUrls: ['./edit-product-category.component.css']
})
export class EditProductCategoryComponent implements OnInit {
  addProduct:any;
  productsCategory: any;
  category: string="";
  id: any;

  constructor(private fb:FormBuilder, private routes:Router, private productCategoryService:ProductCategoryService,  private url:ActivatedRoute) { 
    this.addProduct=fb.group(
      {
        libelle:['',Validators.required]
      }
    )
  }

  ngOnInit(): void {
    this.id=this.url.snapshot.params['id'];
    console.log(this.id)
    this.productCategoryService.singleProductCategory(this.id).subscribe(data=>{
      this.addProduct.patchValue(data);
    })
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
    //this.id=this.url.snapshot.params['id'];
    this.productCategoryService.updateProductCategory(this.id,this.addProduct.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(["/productCategory"])
    });

  }
}
