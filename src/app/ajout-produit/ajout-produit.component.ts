import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductCategoryService } from '../services/product-category.service';
import { ProduitService } from '../services/produit.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
 form: any;
 produit:any;
 imageData:any;
 addProduct:any;
 productsCategory: any;
 category: string="";
 selectedOption: any;
 mySelect :any;
 selectedValue: any;
  constructor(private fb:FormBuilder,private routes:Router,private produitService:ProduitService, private productCategoryService:ProductCategoryService) { 

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
    this.form=new FormGroup ({
      nomProd:new FormControl(null),
      description:new FormControl(null),
      quantiteProd:new FormControl(null),
      prix:new FormControl(null),
      image:new FormControl(null),
      categorieProduit:new FormControl(null)
    });
    this.loadProductCategory();
  }
  loadProductCategory(){
    this.productCategoryService.listProductCategory().subscribe((data:any)=>{
      console.log(data);
      this.productsCategory=data;
    });
  }
onSubmit(){
  this.produitService.addProduct(this.form.value.nomProd, this.form.value.description, this.form.value.quantiteProd,this.form.value.prix,this.form.value.image,this.form.value.categorieProduit).subscribe((data:any)=>{
    console.log(data);
    this.routes.navigate(["/listProduit"])
  });
    this.form.reset();
    this.imageData = null;
}

  onFileSelect(event :Event){
    console.log("file selected");
    const testFile =(event.target as HTMLInputElement).files;
    if(testFile !=null){
      const file=testFile[0];
      this.form.patchValue({image:file});
      const allowedFileTypes=["image/png", "image/jpeg","image/jpg"];
      if(file && allowedFileTypes.includes(file.type)){
        const reader =new FileReader();
        reader.onload=()=>{
          this.imageData=reader.result as string;
        }
        reader.readAsDataURL(file);
      }
    }
  }


}
