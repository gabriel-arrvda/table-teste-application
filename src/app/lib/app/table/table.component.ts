import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITableController } from '../../interfaces/ITableController';
import { FieldLoaderDirective } from '../components/directives/field.loader';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FieldLoaderDirective],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  @Input() dataBase!: ITableController;

  constructor(private elRef: ElementRef) { }

  ngOnChanges() {
    if (this.dataBase) {
      this.setTableProperties();
    }
  }

  setTableProperties() {
    if (this.dataBase.table.font?.bodyName) this.elRef.nativeElement.style.setProperty("--font-bodyName", this.dataBase.table.font.bodyName);
    if (this.dataBase.table.font?.bodyFamily) this.elRef.nativeElement.style.setProperty("--font-bodyFamily", this.dataBase.table.font.bodyFamily);
    if (this.dataBase.table.font?.bodySize) this.elRef.nativeElement.style.setProperty("--font-bodySize", this.dataBase.table.font.bodySize);
    if (this.dataBase.table.font?.bodyColor) this.elRef.nativeElement.style.setProperty("--font-bodyColor", this.dataBase.table.font.bodyColor);
    if (this.dataBase.table.font?.bodyStyle) this.elRef.nativeElement.style.setProperty("--font-bodyStyle", this.dataBase.table.font.bodyStyle);
    if (this.dataBase.table.font?.bodyWeight) this.elRef.nativeElement.style.setProperty("--font-bodyWeight", this.dataBase.table.font.bodyWeight);
    if (this.dataBase.table.font?.headerName) this.elRef.nativeElement.style.setProperty("--font-headerName", this.dataBase.table.font.headerName);
    if (this.dataBase.table.font?.headerFamily) this.elRef.nativeElement.style.setProperty("--font-headerFamily", this.dataBase.table.font.headerFamily);
    if (this.dataBase.table.font?.headerSize) this.elRef.nativeElement.style.setProperty("--font-headerSize", this.dataBase.table.font.headerSize);
    if (this.dataBase.table.font?.headerColor) this.elRef.nativeElement.style.setProperty("--font-headerColor", this.dataBase.table.font.headerColor);
    if (this.dataBase.table.font?.headerWeight) this.elRef.nativeElement.style.setProperty("--font-headerWeight", this.dataBase.table.font.headerWeight);
    if (this.dataBase.table.font?.headerStyle) this.elRef.nativeElement.style.setProperty("--font-headerStyle", this.dataBase.table.font.headerStyle);
  }
}
