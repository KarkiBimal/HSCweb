import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';


@Component({
  selector: 'app-mycn',
  templateUrl: './mycn.component.html',
  styleUrls: ['./mycn.component.css']
})
export class MYCNComponent implements OnInit {

  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

  ngOnInit(): void {
  }

}
