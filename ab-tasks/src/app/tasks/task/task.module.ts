import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TaskModule {}
