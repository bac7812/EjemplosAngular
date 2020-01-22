import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { ExplorerService } from "../explorer.service";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"]
})
export class CountryComponent implements OnInit {
  country$: Observable<any[]>;
  indicator$: Observable<any[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private explorerService: ExplorerService
  ) {}

  ngOnInit() {
    const countryId = this.activatedRoute.snapshot.params.countryId;
    this.country$ = this.explorerService.getCountryId$(countryId);
    this.indicator$ = this.explorerService.getCountryIndicator$(countryId);
  }
}
