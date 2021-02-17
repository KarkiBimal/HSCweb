import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  images=["./assets/img/slides/slide-bluegreencells.jpg","./assets/img/slides/slide-ttu-bwcells.jpg","./assets/img/slides/braintumor-BT-12.jpg"]

  constructor() { }

  ngOnInit(): void {
  }

}
