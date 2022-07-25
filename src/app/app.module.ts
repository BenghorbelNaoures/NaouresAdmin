import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditProductCategoryComponent } from './edit-product-category/edit-product-category.component';
import { AddProductCategoryComponent } from './add-product-category/add-product-category.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ModifProduitComponent } from './modif-produit/modif-produit.component';
import { QRCodeModule } from "angular2-qrcode";
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    SideBarComponent,
    AddProductComponent,
    ProductComponent,
    ProductCategoryComponent,
    EditProductComponent,
    EditProductCategoryComponent,
    AddProductCategoryComponent,
    AjoutProduitComponent,
    ListProduitComponent,
    ModifProduitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//pour les formulaires -->pour utiliser le "ngModel"
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    QRCodeModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent, FooterComponent]
})
export class AppModule { }
