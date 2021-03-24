import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';


@Component({
  selector: 'app-leukemiancii',
  templateUrl: './leukemiancii.component.html',
  styleUrls: ['./leukemiancii.component.css']
})
export class LeukemianciiComponent implements OnInit {

  
  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

  ngOnInit(): void {
  }

}
