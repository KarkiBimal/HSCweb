import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';


@Component({
  selector: 'app-neuroblastomancii',
  templateUrl: './neuroblastomancii.component.html',
  styleUrls: ['./neuroblastomancii.component.css']
})
export class NeuroblastomanciiComponent implements OnInit {

  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

  ngOnInit(): void {
  }

}
