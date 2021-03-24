import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';

@Component({
  selector: 'app-brainncci',
  templateUrl: './brainncci.component.html',
  styleUrls: ['./brainncci.component.css']
})
export class BrainncciComponent implements OnInit {

  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

  ngOnInit(): void {
  }

}
