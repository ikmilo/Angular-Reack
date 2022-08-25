import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebasedataService {
  items:Observable<any[]> | any;
  collection:any=[]
  constructor(private firestore: AngularFirestore) {
    console.log("Servicio de Firebase Corriendo...")
    this.items = this.firestore.collection('productos').valueChanges();
  }
  getById(id:any){
    return this.items = this.firestore.collection('productos')
    .doc(id).valueChanges();
  }
}
