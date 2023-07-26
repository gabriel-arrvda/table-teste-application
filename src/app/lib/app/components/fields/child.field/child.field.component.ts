import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildField } from 'src/app/lib/models/fields/fields';

@Component({
  selector: 'app-child.field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.field.component.html',
  styleUrls: ['./child.field.component.scss']
})
export class ChildFieldComponent {
  field!: ChildField;
  data!: any;
}
