import { CategorieProduit } from "./CategorieProduit";

export interface Produit {
    
_id:string;
nomProd:string;
prix:number;
image:string;
description:string;
quantiteProd:number;
categorieProduit:CategorieProduit;
dateAjout:Date;
isActive: boolean;
}