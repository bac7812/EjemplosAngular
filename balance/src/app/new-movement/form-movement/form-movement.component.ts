import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovementService } from 'src/app/movement.service';

@Component({
  selector: 'ab-form-movement',
  templateUrl: './form-movement.component.html',
  styleUrls: ['./form-movement.component.css']
})
export class FormMovementComponent {
  @Input() maxDate;

  @Input() ingresos;

  @Input() gastos;

  movementForm = this.fb.group({
    fecha: [null, Validators.required],
    concepto: [null, Validators.required],
    importe: [null, Validators.required],
    tipo: ['ingreso', Validators.required],
    subtipo: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  @Output() post = new EventEmitter<any>();

  onSubmit() {
    this.post.emit(this.movementForm.value);
  }

  isDirty(controlName: string) {
    return this.movementForm.controls[controlName].dirty;
  }
}
