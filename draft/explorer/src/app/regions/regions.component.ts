import { Component, OnInit } from "@angular/core";
import { ExplorerService } from "../explorer.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-regions",
  templateUrl: "./regions.component.html",
  styleUrls: ["./regions.component.css"]
})
export class RegionsComponent implements OnInit {
  regions$: Observable<any[]>;

  constructor(private explorerService: ExplorerService) {}

  ngOnInit() {
    this.regions$ = this.explorerService.getRegions$();
  }
}
