import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Bienvenido';
  constructor() { }

  ngOnInit() {
  }

}
