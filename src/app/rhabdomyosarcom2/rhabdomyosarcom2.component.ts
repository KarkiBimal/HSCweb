import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';

@Component({
  selector: 'app-rhabdomyosarcom2',
  templateUrl: './rhabdomyosarcom2.component.html',
  styleUrls: ['./rhabdomyosarcom2.component.css']
})
export class Rhabdomyosarcom2Component implements OnInit {

 
  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

  ngOnInit(): void {
  }

}
