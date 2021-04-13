import { Component, OnInit } from '@angular/core';
import { FireserviceService } from './../fireservice.service';


@Component({
  selector: 'app-pd-pd-pm',
  templateUrl: './pd-pd-pm.component.html',
  styleUrls: ['./pd-pd-pm.component.css']
})
export class PdPdPmComponent implements OnInit {

  constructor(private cartService: FireserviceService) { }
  
  addToCart1(x:string, y:string){
    this.cartService.addToCart(x,y);
  }
  ngOnInit(): void {
  }

}
