import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';

@Component({
  selector: 'app-othercancer',
  templateUrl: './othercancer.component.html',
  styleUrls: ['./othercancer.component.css']
})
export class OthercancerComponent implements OnInit {

  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

  ngOnInit(): void {
  }

}
