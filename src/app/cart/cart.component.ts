import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(db:AngularFireDatabase) {
    
    let shoppingcart=
    db.list('/shopping-carts').valueChanges()
    console.log(shoppingcart)
   
   }

  ngOnInit(): void {
  }

}
