import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';


@Component({
  selector: 'app-ependymoma',
  templateUrl: './ependymoma.component.html',
  styleUrls: ['./ependymoma.component.css']
})
export class EpendymomaComponent {
  
  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

}
