import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() {

    alert("OLÁ GAMER, SEJA BEM VINDO");

   }

  ngOnInit(): void {
  }

}
