import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { EditProductCategoryComponent } from './edit-product-category/edit-product-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { AddProductCategoryComponent } from './add-product-category/add-product-category.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ModifProduitComponent } from './modif-produit/modif-produit.component';

const routes: Routes = [
  {    path :'', component:AppComponent },
  {    path :'product', component:ProductComponent },
  {    path :'newProduct', component:AddProductComponent  },
  {    path :'editProduct/:id', component:EditProductComponent  },
  {    path :'newProductCategory', component:AddProductCategoryComponent  },
  {    path :'productCategory', component:ProductCategoryComponent  },
  {    path :'editProductCategory/:id', component:EditProductCategoryComponent  },
  {    path :'ajoutProduit', component:AjoutProduitComponent  },
  {    path :'listProduit', component:ListProduitComponent  },
  {    path :'modifProduit/:id', component:ModifProduitComponent  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
