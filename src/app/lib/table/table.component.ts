import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  @Input() data: any;

  headers: string[] = [];

  ngOnChanges() {
    if (this.data && this.data.length > 0) {
      this.headers = Object.keys(this.data[0]);
    }
  }
}
