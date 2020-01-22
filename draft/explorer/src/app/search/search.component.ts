import { Component, OnInit } from '@angular/core';
import { ExplorerService } from '../explorer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  incomeLevels$ = this.explorerService.getIncomeLevels$();
  lendingTypes$ = this.explorerService.getLendingTypes$();
  regions$ = this.explorerService.getRegions$();
  countries$: Observable<any[]>;

  constructor(private explorerService: ExplorerService) { }

  ngOnInit() {
  }

  onFilter(filters) {
    this.countries$ = this.explorerService.getSearch$(filters.incomeLevel, filters.lendingType, filters.geographicRegions);
  }

}
