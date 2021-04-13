import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';


@Component({
  selector: 'app-alk',
  templateUrl: './alk.component.html',
  styleUrls: ['./alk.component.css']
})
export class ALKComponent implements OnInit {

  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

  ngOnInit(): void {
  }

}
