import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private http:HttpClient) { }
  addProductCategory(productCategory:any){
    
    return this.http.post("http://localhost:3000/categorieProduit/add",productCategory)
  }
  listProductCategory(){
    
    return this.http.get("http://localhost:3000/categorieProduit/")
  }
  oneProductCategory(id:any){
    
    return this.http.get("http://localhost:3000/categorieProduit/"+id)
  }
  deleteProductCategory(id:any){
    
    return this.http.delete("http://localhost:3000/categorieProduit/delete/"+id)
  }
  singleProductCategory(id:any){
    
    return this.http.get("http://localhost:3000/categorieProduit/get/"+id)
  }
  updateProductCategory(id:any,productCategory:any){
    return this.http.put("http://localhost:3000/categorieProduit/update/"+id,productCategory)
  }
}
