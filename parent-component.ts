
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.html'
})
export class ParentComponent {
  receivedData: any;

  handleQuery(query: string) {
    // Call your service to get the data
    // this.receivedData = ...
  }
}
