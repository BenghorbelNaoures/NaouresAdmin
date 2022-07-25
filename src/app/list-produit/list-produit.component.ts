import { Component, OnDestroy, OnInit } from '@angular/core';
import { Produit } from '../models/Produit';
import { ProduitService } from '../services/produit.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ProductCategoryService } from '../services/product-category.service';


@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  produits:Produit[]=[];
  private produitSubscription : any;
  filteredProducts: any//=this.produits;
  _filterText:string = '';
  productCategry:any;
  searchText:any;
  get filterText(){
    return this._filterText;
  }
  set filterText(value: string){
    this._filterText = value;
    this.filteredProducts = this.filterProduitParNomProd(value);
  }
  constructor(private produitService:ProduitService, private routes:Router,private productCategoryService:ProductCategoryService) { }

  ngOnInit(): void {
    this.loadProduct();
    this.filteredProducts = this.produits;
    
    
  }
  /*ngOnDestroy() {
    this.produitSubscription.unsubscribe();
  }*/
  loadProduct(){
    this.produitService.getProduits().subscribe((data:any)=>{
      console.log(data);
      this.produits=data;
      //this.produits.categorieProduit= this.loadProductCategory(this.produits.categorieProduit)
    });
  }
  loadProductCategory(id:any){
    this.productCategoryService.singleProductCategory(id).subscribe((data:any)=>{
      console.log(data);
      this.productCategry=data;
    });
  }
  deleteProduct(datas:any){
    this.produitService.deleteProduct(datas._id).subscribe(data=>{
      console.log(data);
      this.produits=this.produits.filter((u:any)=>u!==datas)
      this.routes.navigate(['/listProduit']);
      //this.routes.navigate(["/product"])
    })
  }
  filterProduitParNomProd(filterTerm: string){
    console.log("filterTerm>>>>>"+filterTerm);
    if(this.produits.length === 0 || this.filterText === ''){
      return this.produits;
    }else if (filterTerm.length=== 0 || filterTerm===''){
      return this.produits;
  } else {
      return this.produits.filter((produit) => 
      { 
          return produit.nomProd.toLowerCase() === filterTerm.toLowerCase();
      })
  }
  }
  onMouseMove(){}

}
