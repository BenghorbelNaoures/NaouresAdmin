import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(product:any,id:any){
    
    return this.http.post("http://localhost:3000/produit/addProduct/62c616947b56f5ab0f467602"+id,product)
  }
  listProduct(){
    
    return this.http.get("http://localhost:3000/produit/")
  }
  deleteProduct(id:any){
    
    return this.http.delete("http://localhost:3000/produit/delete/"+id)
  }
  singleProduct(id:any){
    
    return this.http.get("http://localhost:3000/produit/get/"+id)
  }
  updateProduct(id:any,product:any){
    return this.http.put("http://localhost:3000/produit/update/"+id,product)
  }
}
