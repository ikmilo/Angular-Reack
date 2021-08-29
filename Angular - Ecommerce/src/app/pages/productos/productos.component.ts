import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';
import { FirebasedataService } from 'src/app/services/firebasedata.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() 
  data:any;
  @Input()
  loading:any;
  fireproductos:any=[]
  constructor(
    private firebasedataService:FirebasedataService
  ){

  }

   // F I R E B A S E
   async getDataFirebase(){
    this.fireproductos = await this.firebasedataService.items
    this.loading=false
  }
  ngOnInit(){
    this.getDataFirebase()
    console.log("imprimiendo DATA desde Productos.TS : ==>")
    console.log(this.data)
  }

}
