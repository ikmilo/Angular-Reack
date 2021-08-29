import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { FirebasedataService } from 'src/app/services/firebasedata.service';

@Component({
  selector: 'app-dproducto',
  templateUrl: './dproducto.component.html',
  styleUrls: ['./dproducto.component.css']
})
export class DproductoComponent implements OnInit {
  loading=true;
  producto:any;
  item:any=[];
  constructor(
    private activedRoute:ActivatedRoute,
    /*jsonfy*/
    /*private productoService:ProductosService,*/
    private firebasedataService:FirebasedataService
  ) { 
    
  }
  async ngOnInit(){
    const id=this.activedRoute.snapshot.paramMap.get("id")
    /*jsonfy*/
    //this.producto = await this.productoService.getById(id)
    
    /*Firebase*/
    console.log("Imprimiendo desde Detalle Producto: ")
    this.firebasedataService.getById(id).subscribe((doc)=>{
      this.item = doc,
      console.log(this.item)
    })
  }
}
