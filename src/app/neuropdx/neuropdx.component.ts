import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';

@Component({
  selector: 'app-neuropdx',
  templateUrl: './neuropdx.component.html',
  styleUrls: ['./neuropdx.component.css']
})
export class NeuropdxComponent implements OnInit {

  
  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

  ngOnInit(): void {
  }

}
