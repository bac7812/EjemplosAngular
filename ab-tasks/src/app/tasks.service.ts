import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private url = 'https://api-base.herokuapp.com/api/pub/tasks';
  taskList: any[];

  constructor(private http: HttpClient) {
    // this.http
    //   .get<any[]>(this.url)
    //   .subscribe(data => (this.taskList = data ? data : []));
    // const temp = localStorage.getItem('taskList');
    // if (temp) {
    //   this.taskList = JSON.parse(temp);
    // } else {
    //   this.taskList = [];
    // }
  }

  getStates() {
    return [
      { id: 0, name: 'Pending', color: 'primary' },
      { id: 1, name: 'Complete', color: '' },
      { id: 2, name: 'In Progress', color: 'primary' },
      { id: 3, name: 'Cancel', color: 'warn' }
    ];
  }

  getTasks$() {
    return this.http.get<any[]>(this.url).pipe(map(data => (data ? data : [])));
  }

  getTaskById$(id) {
    return this.http
      .get<any>(this.url + '/' + id)
      .pipe(map(data => (data ? data : {})));
  }

  postTask(task) {
    // this.taskList.push(task);
    // localStorage.setItem('taskList', JSON.stringify(this.taskList));
    this.http.post(this.url, task).subscribe({
      next: res =>
        this.http
          .get<any[]>(this.url)
          .subscribe(data => (this.taskList = data ? data : []))
    });
  }

  putTask$(task) {
    return this.http.put(this.url + '/' + task._id, task);
  }
}
