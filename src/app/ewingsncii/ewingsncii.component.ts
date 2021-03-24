import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';

@Component({
  selector: 'app-ewingsncii',
  templateUrl: './ewingsncii.component.html',
  styleUrls: ['./ewingsncii.component.css']
})
export class EwingsnciiComponent implements OnInit {

  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

  ngOnInit(): void {
  }

}
