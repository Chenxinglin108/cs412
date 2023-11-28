
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.html'
})
export class FormComponent {
  @Output() queryEvent = new EventEmitter<string>();
  query: string = '';

  submitQuery() {
    if (this.query.length > 1) {
      this.queryEvent.emit(this.query);
    }
  }
}
