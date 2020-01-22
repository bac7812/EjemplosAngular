import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'ab-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // taskList = []; // this.taskService.taskList;
  taskList$: Observable<any[]>;
  constructor(private taskService: TasksService) {
    // this.taskService.getTasks$().subscribe(tasks => (this.taskList = tasks));
    this.taskList$ = this.taskService.getTasks$();
  }

  ngOnInit() {}
}
