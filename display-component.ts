
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.html'
})
export class DisplayComponent {
  @Input() data: any;
}
