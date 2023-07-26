import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleText } from 'src/app/lib/models/fields/fields';

@Component({
  selector: 'app-simple.field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple.field.component.html',
  styleUrls: ['./simple.field.component.scss']
})
export class SimpleFieldComponent {
  field!: SimpleText;
  data!: any;
}
