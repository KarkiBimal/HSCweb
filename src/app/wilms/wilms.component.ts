import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';


@Component({
  selector: 'app-wilms',
  templateUrl: './wilms.component.html',
  styleUrls: ['./wilms.component.css']
})
export class WilmsComponent {
  
  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }
}
