import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ExplorerService {
  private country = "https://api.worldbank.org/v2/country";
  private region = "https://api.worldbank.org/v2/region";
  private incomeLevel = "https://api.worldbank.org/v2/incomeLevel";
  private lendingType = "https://api.worldbank.org/v2/lendingType";
  private format = "per_page=1000&format=json";

  constructor(private httpClient: HttpClient) {}

  getCountries$() {
    const url = this.country + "?" + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(data => data[1]));
  }

  getCountryId$(countryId) {
    const url = this.country + "/" + countryId + "?" + this.format;
    return this.httpClient.get<any>(url).pipe(map(data => data[1][0]));
  }

  getRegions$() {
    const url = this.region + "?" + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(data => data[1]));
  }

  getRegionCode$(regionCode) {
    const url = this.region + "/" + regionCode + "?" + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(data => data[1][0]));
  }

  getCountriesRegionCode$(regionCode) {
    const url = this.country + "?region=" + regionCode + "&" + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(data => data[1]));
  }

  getCountryIndicator$(countryId){
    const url = this.country + "/" + countryId + "/indicators/SP.POP.TOTL;NY.GDP.MKTP.CD/?source=2&date=2018&" + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(data => data[1]));
  }

  getIncomeLevels$() {
    const url = this.incomeLevel + "?" + this.format;
    return this.httpClient.get<any>(url).pipe(map(data => data[1]));
  }

  getLendingTypes$() {
    const url = this.lendingType + "?" + this.format;
    return this.httpClient.get<any>(url).pipe(map(data => data[1]));
  }

  getSearch$(incomeLevelId, lendingTypeId, regionCode) {
    // const url = this.country + "?incomeLevel=" + incomeLevelId +
    // "&lendingType=" + lendingTypeId + "&region=" + regionCode + "&" + this.format;
    // console.log(url);
    let url = this.country + "?" + this.format;
    if (incomeLevelId) {
      url += "&incomeLevel=" + incomeLevelId;
    }
    if (lendingTypeId) {
      url += "&lendingType=" + lendingTypeId;
    }
    if (regionCode) {
      url += "&region=" + regionCode;
    }
    console.log(url);
    return this.httpClient.get<any>(url).pipe(map(data => data[1]));

  }
}
