import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementRoutingModule } from './movement-routing.module';
import { MovementComponent } from './movement.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [MovementComponent],
  imports: [
    CommonModule,
    MovementRoutingModule,
    MatCardModule
  ]
})
export class MovementModule { }
