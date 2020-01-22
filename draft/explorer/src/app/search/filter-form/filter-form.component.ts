import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent {

  @Input() incomeLevels;
  @Input() lendingTypes;
  @Input() regions;

  filterForm = this.formBuilder.group({
    incomeLevel: [null],
    lendingType: [null],
    geographicRegions: [null]
  });

  constructor(private formBuilder: FormBuilder) {}

  @Output() filter = new EventEmitter<any>();

  onSubmit() {
    this.filter.emit(this.filterForm.value);
    console.log(this.filterForm.value);
  }
}
