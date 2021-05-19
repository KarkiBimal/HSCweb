import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(private db: AngularFireDatabase) {
    
   }
  private create(){
      return this.db.list('/shopping-carts').push({
      dateCreated:new Date().getTime()
    });
  }
  
  private getCart(cartId:string){
     return this.db.object('/shopping-carts/'+ cartId);
  }
  public node_v(val:any){
        return val;
  }

  private async getOrCreateCart(){
    let cartId=localStorage.getItem('cartId');
    if (cartId) return cartId; 
    else{
      
      let result= await this.create();
      let val=this.node_v(result.key);
      localStorage.setItem('cartId',val);
      return val;
    }
    
  }
    
  async addToCart(x:string, y:string){
      let cartId=await this.getOrCreateCart();
      var firebaseRef=firebase.database().ref("/shoppingcarts/"+cartId).child(x).set(y);
      return cartId;
   
      
  }

   getProducts():Observable<any[]>{
    let cartId2=localStorage.getItem('cartId');
    console.log(cartId2);
    return this.db.list('shoppingcarts/'+cartId2).valueChanges();
  }

  delete(a:string){
    let cartId3=localStorage.getItem('cartId');
    const itemsRef = this.db.list('shoppingcarts/'+cartId3);
    itemsRef.remove(a);
  }

  }
  


