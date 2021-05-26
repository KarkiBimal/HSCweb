import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';


@Component({
  selector: 'app-retinoblastoma',
  templateUrl: './retinoblastoma.component.html',
  styleUrls: ['./retinoblastoma.component.css']
})
export class RetinoblastomaComponent {
  
  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

}
