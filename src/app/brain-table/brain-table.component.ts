import { FireserviceService } from './../fireservice.service';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';




@Component({
  selector: 'app-brain-table',
  templateUrl: './brain-table.component.html',
  styleUrls: ['./brain-table.component.css']
})
export class BrainTableComponent  {
  
  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

}
