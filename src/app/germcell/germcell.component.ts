import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';


@Component({
  selector: 'app-germcell',
  templateUrl: './germcell.component.html',
  styleUrls: ['./germcell.component.css']
})
export class GermcellComponent {
  
  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }


}
