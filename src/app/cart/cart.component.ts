import { FireserviceService } from './../fireservice.service';
import { Observable } from 'rxjs';
import { ProductserviceService } from './../productservice.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
   
  items!: Observable<any[]>;
  
  constructor(private ps: FireserviceService) {}
    
  ngOnInit(){
    this.items=this.ps.getProducts();
    
  }

  deleteCall(a:string){
    this.ps.delete(a);
    console.log(a);
  }
  
    
  }


