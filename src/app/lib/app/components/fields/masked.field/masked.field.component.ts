import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskedText } from 'src/app/lib/models/fields/fields';
import { FormatPipe } from '../../pipe/mask.pipe';

@Component({
  selector: 'app-masked.field',
  standalone: true,
  imports: [CommonModule, FormatPipe],
  templateUrl: './masked.field.component.html',
  styleUrls: ['./masked.field.component.scss']
})
export class MaskedFieldComponent {
  field!: MaskedText;
  data!: any;
}
