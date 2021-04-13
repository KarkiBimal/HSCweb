import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';


@Component({
  selector: 'app-mycnamplified',
  templateUrl: './mycnamplified.component.html',
  styleUrls: ['./mycnamplified.component.css']
})
export class MYCNamplifiedComponent implements OnInit {

  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }


  ngOnInit(): void {
  }

}
