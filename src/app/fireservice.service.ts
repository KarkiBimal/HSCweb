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
  private node_v(val:any){
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
      var firebaseRef=firebase.database().ref("/shopping-carts/"+cartId).child(x).set(y);
   
      
  }
  

}
