import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../models/Produit';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private produits : Produit[]=[];
  private produits$=new Subject<Produit[]>();
  readonly url ="http://localhost:3000/produit";

  constructor(private http :HttpClient) { }

  getProduits(){
    return this.http.get("http://localhost:3000/produit/")
  }
  addProduct(nomProd:string, description:string, quantiteProd:string,prix:string,image: string,categorieProduit:string){
    const producteData = new FormData();
    producteData.append("nomProd", nomProd);
    producteData.append("description", description);
    producteData.append("quantiteProd", quantiteProd);
    producteData.append("prix",prix);
    producteData.append("image", image);
    producteData.append("categorieProduit", categorieProduit);
    console.log("producteData>>>>>><"+producteData);
    return this.http.post("http://localhost:3000/produit/ajoutProduit",producteData);
    //return this.http.post("http://localhost:3000/produit/ajouProduit/"+categorieProduit,producteData);

  }
  getProduitsStream(){
    return this.produits$.asObservable();
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
