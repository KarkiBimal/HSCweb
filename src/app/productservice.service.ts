import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private db:AngularFirestore) { }
  getProducts():Observable<any[]>{
    return this.db.collection('items').valueChanges();
  }
}
