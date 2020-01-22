import { Component, OnInit } from '@angular/core';
import { MovementService } from '../movement.service';
import { Observable } from 'rxjs';

export interface MovementsElement {
  position: number;
  fecha: string;
  concepto: string;
  importe: number;
  id: number;
}

@Component({
  selector: 'ab-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'fecha', 'concepto', 'importe', 'id'];
  dataSource;

  constructor(private ms: MovementService) {
    this.dataSource = this.ms.getMovements$();
   }

  ngOnInit() {
  }

}
