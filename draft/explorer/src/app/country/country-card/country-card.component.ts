import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-country-card",
  templateUrl: "./country-card.component.html",
  styleUrls: ["./country-card.component.css"]
})
export class CountryCardComponent implements OnInit {
  @Input() country: any;
  @Input() indicator: any;

  constructor() {}

  ngOnInit() {
  }
}
