import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';


@Component({
  selector: 'app-tert',
  templateUrl: './tert.component.html',
  styleUrls: ['./tert.component.css']
})
export class TERTComponent implements OnInit {

  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

  ngOnInit(): void {
  }

}
