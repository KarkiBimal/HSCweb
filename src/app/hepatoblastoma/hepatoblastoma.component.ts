import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';


@Component({
  selector: 'app-hepatoblastoma',
  templateUrl: './hepatoblastoma.component.html',
  styleUrls: ['./hepatoblastoma.component.css']
})
export class HepatoblastomaComponent {
  
  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }
}
