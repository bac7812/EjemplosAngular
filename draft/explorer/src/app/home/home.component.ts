import { Component, OnInit } from '@angular/core';
import { ExplorerService } from '../explorer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries$: Observable<any[]>;

  constructor(private explorerService: ExplorerService) {
  }

  ngOnInit() {
    this.countries$ = this.explorerService.getCountries$();
  }

}
