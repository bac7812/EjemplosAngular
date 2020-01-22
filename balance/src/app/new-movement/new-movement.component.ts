import { Component, OnInit, Input } from '@angular/core';
import { MovementService } from '../movement.service';

@Component({
  selector: 'ab-new-movement',
  templateUrl: './new-movement.component.html',
  styleUrls: ['./new-movement.component.css']
})
export class NewMovementComponent implements OnInit {
  maxDate = new Date(Date.now());

  ingresos = this.ms.getIngresos();

  gastos = this.ms.getGastos();

  constructor(private ms: MovementService) {}

  ngOnInit() {}

  onPost(movement) {
    this.ms.postMovement(movement);
  }
}
