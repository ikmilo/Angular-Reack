import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
 constructor(private http:HttpClient){}
 getAll(){
   return this.http.get("https://jsonfy.com/items")
 }
 getAllPromise(){
  return this.http.get("https://jsonfy.com/items").toPromise()
}
 getById(id:any){
   console.log("Imprimiendo var id: " + id)
   return this.http.get("https://jsonfy.com/items/"+id).toPromise()
   

 }
}

