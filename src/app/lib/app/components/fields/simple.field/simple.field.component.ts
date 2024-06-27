import { Component } from '@angular/core';

import { SimpleText } from 'src/app/lib/models/fields/fields';

@Component({
  selector: 'app-simple.field',
  standalone: true,
  imports: [],
  templateUrl: './simple.field.component.html',
  styleUrls: ['./simple.field.component.scss']
})
export class SimpleFieldComponent {
  field!: SimpleText;
  data!: any;
}
