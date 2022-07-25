import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategoryService } from '../services/product-category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  addProduct:any;
  productsCategory: any;
  category: string="";
  id: any;

  constructor(private fb:FormBuilder, private routes:Router, private productService:ProductService, private productCategoryService:ProductCategoryService,  private url:ActivatedRoute) { 
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
    this.id=this.url.snapshot.params['id'];
    console.log(this.id)
    this.productService.singleProduct(this.id).subscribe(data=>{
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
    this.productService.updateProduct(this.id,this.addProduct.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(["/product"])
    });

  }
}
