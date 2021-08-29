import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { FirebasedataService } from 'src/app/services/firebasedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos:any=[]
  fireproductos:any=[]
  loading:boolean=true
  constructor(
    private productoService:ProductosService,
    private firebasedataService:FirebasedataService
    ){
    //this.getProductos()/**/ */
    this.getDataFirebase()
    }
  /*Jsonfy*/
  /*async getProductos(){
    try{
      this.productos = await this.productoService.getAllPromise()
      console.log
    }catch(errors){
      console.log(errors)
    }
  }*/
  // F I R E B A S E
  async getDataFirebase(){
    this.fireproductos = await this.firebasedataService.items
    this.loading=false
    console.log("Imprimiendo desde Home.Component.TS ==> ")
    console.log(this.fireproductos)
  }
  ngOnInit(): void {
  }

}
