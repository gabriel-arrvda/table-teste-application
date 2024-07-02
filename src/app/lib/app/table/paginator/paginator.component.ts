import { Component, model } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  rows = model<number>(10);
}
