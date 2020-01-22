import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'ab-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  states = this.tasksService.getStates();
  constructor(private tasksService: TasksService) {}

  ngOnInit() { }
  onTaskPost(task) {
    this.tasksService.postTask( task );
  }
}
