import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';


@Component({
  selector: 'app-rhabdomyosarcoma',
  templateUrl: './rhabdomyosarcoma.component.html',
  styleUrls: ['./rhabdomyosarcoma.component.css']
})
export class RhabdomyosarcomaComponent implements OnInit {

  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

  ngOnInit(): void {
  }

}
