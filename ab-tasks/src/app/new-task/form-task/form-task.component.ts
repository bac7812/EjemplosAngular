import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ab-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {
  taskForm = this.fb.group({
    description: [null, [Validators.required, Validators.minLength(3)]],
    dueDate: [null, [Validators.required]],
    state: [null, []],
    priority: ['default', Validators.required]
  });

  @Input() states;
  constructor(private fb: FormBuilder) {}
  @Output() post = new EventEmitter<any>();

  onSubmit() {
    this.post.emit(this.taskForm.value);
  }
}
