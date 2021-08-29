import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

productos=[
  {
    nombre: "iphone x",
    precio:1000,
    descripcion:"Desc iPhone X"
  },
  {
    nombre: "Moto G",
    precio:500,
    descripcion:"Desc Moto G"
  },
  {
    nombre: "iphone 12",
    precio:1200,
    descripcion:"Desc iPhone 12"
  }
]

  constructor() { 

  }
  ngOnInit(): void {
  }
  filtrarTodo(){
    this.productos=[]
  }

}
