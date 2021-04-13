import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';


@Component({
  selector: 'app-alt-est',
  templateUrl: './alt-est.component.html',
  styleUrls: ['./alt-est.component.css']
})
export class ALTESTComponent implements OnInit {

   
  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

  ngOnInit(): void {
  }

}
