import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  title = 'Balance';
  constructor() { }

  ngOnInit() {
  }

}
