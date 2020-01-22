import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  movementsList: any[];
  private url = 'https://api-base.herokuapp.com/api/pub/transactions';

  constructor(private http: HttpClient) {
    // const temp = localStorage.getItem('movementsList');
    // if (temp) {
    //   this.movementsList = JSON.parse(temp);
    // } else {
    //   this.movementsList = [];
    // }
  }

  getIngresos() {
    return ['Nómina', 'Ventas', 'Donaciones', 'Otros'];
  }

  getGastos() {
    return ['Hipoteca', 'Gasolina', 'Supermercado', 'Otros'];
  }

  getMovements$() {
    return this.http.get<any[]>(this.url).pipe(map(data => (data ? data : [])));
  }

  getMovementById$(id) {
    return this.http
      .get<any>(this.url + '/' + id)
      .pipe(map(data => (data ? data : {})));
  }

  postMovement(movement) {
    // this.movementsList.push(movement);
    // localStorage.setItem('movementsList', JSON.stringify(this.movementsList));
    this.http.post(this.url, movement).subscribe({
      next: res =>
        this.http
          .get<any[]>(this.url)
          .subscribe(data => (this.movementsList = data ? data : []))
    });
  }

  putMovement$(movement) {
    return this.http.put(this.url + '/' + movement._id, movement);
  }
}
