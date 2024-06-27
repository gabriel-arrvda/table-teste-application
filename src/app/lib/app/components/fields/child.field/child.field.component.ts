import { Component } from '@angular/core';

import { ChildField } from 'src/app/lib/models/fields/fields';

@Component({
  selector: 'app-child.field',
  standalone: true,
  imports: [],
  templateUrl: './child.field.component.html',
  styleUrls: ['./child.field.component.scss']
})
export class ChildFieldComponent {
  field!: ChildField;
  data!: any;

  get value(): string {
    let value = this.data[this.field.key];

    for (const child of this.field.path) {
      value = value[child];
    }

    return value;
  }
}
