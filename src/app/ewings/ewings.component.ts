import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';

@Component({
  selector: 'app-ewings',
  templateUrl: './ewings.component.html',
  styleUrls: ['./ewings.component.css']
})
export class EwingsComponent implements OnInit {

  constructor(private cartService: FireserviceService) { }
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }

  ngOnInit(): void {
  }

}
