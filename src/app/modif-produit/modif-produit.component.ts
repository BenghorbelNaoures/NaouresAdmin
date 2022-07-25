import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../models/Produit';
import { ProductCategoryService } from '../services/product-category.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-modif-produit',
  templateUrl: './modif-produit.component.html',
  styleUrls: ['./modif-produit.component.css']
})
export class ModifProduitComponent implements OnInit {
  form: any;
  imageData:any;
  addProduct:any;
  productsCategory: any;
  category: string="";
  id: any;
  produits:any;
  //produit:any;
  produit:Produit[]=[];
  image:any;
  mySelect :any;
  constructor(private fb:FormBuilder, private routes:Router, private productCategoryService:ProductCategoryService, private productService:ProduitService, private url:ActivatedRoute) { 
    this.addProduct=fb.group(
      {
        nomProd:['',Validators.required],
        description:['',Validators.required],
        quantiteProd:['',Validators.required],
        productCategoryId:['',Validators.required],
        categorieProduit:['',Validators.required],
        prix:['',Validators.required],
        image:['',Validators.required],
      }
    )
  }

  ngOnInit(): void {
    this.id=this.url.snapshot.params['id'];
    console.log(this.id);
    this.productService.singleProduct(this.id).subscribe(data=>{
      this.addProduct.patchValue(data);
      //this.produits=data;
      this.loadImage();
      //this.loadProductCategory();
    });
   }
  loadImage(){
    this.id=this.url.snapshot.params['id'];
    console.log(this.id);
    this.productService.singleProduct(this.id).subscribe(data=>{
      //this.addProduct.patchValue(data);
      this.produits=data;
      this.image= this.produits.image

    }); 
  }
  loadProductCategory(){
    this.id=this.url.snapshot.params['id'];
    console.log(this.id);
    this.productCategoryService.oneProductCategory(this.id).subscribe((data:any)=>{
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
      this.routes.navigate(["/listProduit"])
    });

  }

}
