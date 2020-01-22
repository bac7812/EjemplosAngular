import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'ab-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task$;
  constructor(
    activatedRoute: ActivatedRoute,
    private tasksService: TasksService
  ) {
    const taskId = activatedRoute.snapshot.params.id;
    this.task$ = tasksService.getTaskById$(taskId);
  }
  // default, high, tomorrow
  priorityColors = ['primary', 'accent', 'warn'];

  stateCommands = [
    { id: 0, name: 'Pending', color: 'primary' },
    { id: 1, name: 'Complete', color: '' },
    { id: 2, name: 'In Progress', color: 'primary' },
    { id: 3, name: 'Cancel', color: 'warn' }
  ];
  ngOnInit() {}

  changeState(state, task) {
    task.state = state;
    this.tasksService.putTask$(task).subscribe();
  }
}
