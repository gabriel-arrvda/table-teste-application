import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyField } from 'src/app/lib/models/fields/fields';

@Component({
  selector: 'app-money.field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './money.field.component.html',
  styleUrls: ['./money.field.component.scss']
})
export class MoneyFieldComponent {
  field!: MoneyField;
  data!: any;
}
