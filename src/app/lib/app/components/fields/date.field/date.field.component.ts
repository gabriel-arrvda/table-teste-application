import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateField } from 'src/app/lib/models/fields/fields';

@Component({
  selector: 'app-date.field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date.field.component.html',
  styleUrls: ['./date.field.component.scss']
})
export class DateFieldComponent {
  field!: DateField;
  data!: any;
}
