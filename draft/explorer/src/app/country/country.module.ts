import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CountryRoutingModule } from "./country-routing.module";
import { CountryComponent } from "./country.component";
import { CountryCardComponent } from "./country-card/country-card.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [CountryComponent, CountryCardComponent],
  imports: [CommonModule, CountryRoutingModule, MatCardModule, MatIconModule]
})
export class CountryModule {}
