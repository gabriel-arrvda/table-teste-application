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
    if (this.dataBase.table.cell?.bodyName) this.elRef.nativeElement.style.setProperty("--cell-bodyName", this.dataBase.table.cell.bodyName);
    if (this.dataBase.table.cell?.bodyFamily) this.elRef.nativeElement.style.setProperty("--cell-bodyFamily", this.dataBase.table.cell.bodyFamily);
    if (this.dataBase.table.cell?.bodySize) this.elRef.nativeElement.style.setProperty("--cell-bodySize", this.dataBase.table.cell.bodySize);
    if (this.dataBase.table.cell?.bodyColor) this.elRef.nativeElement.style.setProperty("--cell-bodyColor", this.dataBase.table.cell.bodyColor);
    if (this.dataBase.table.cell?.bodyBg) this.elRef.nativeElement.style.setProperty("--cell-bodyBg", this.dataBase.table.cell.bodyBg);
    if (this.dataBase.table.cell?.bodyStyle) this.elRef.nativeElement.style.setProperty("--cell-bodyStyle", this.dataBase.table.cell.bodyStyle);
    if (this.dataBase.table.cell?.bodyWeight) this.elRef.nativeElement.style.setProperty("--cell-bodyWeight", this.dataBase.table.cell.bodyWeight);
    if (this.dataBase.table.cell?.headerName) this.elRef.nativeElement.style.setProperty("--cell-headerName", this.dataBase.table.cell.headerName);
    if (this.dataBase.table.cell?.headerFamily) this.elRef.nativeElement.style.setProperty("--cell-headerFamily", this.dataBase.table.cell.headerFamily);
    if (this.dataBase.table.cell?.headerSize) this.elRef.nativeElement.style.setProperty("--cell-headerSize", this.dataBase.table.cell.headerSize);
    if (this.dataBase.table.cell?.headerColor) this.elRef.nativeElement.style.setProperty("--cell-headerColor", this.dataBase.table.cell.headerColor);
    if (this.dataBase.table.cell?.headerBg) this.elRef.nativeElement.style.setProperty("--cell-headerBg", this.dataBase.table.cell.headerBg);
    if (this.dataBase.table.cell?.headerWeight) this.elRef.nativeElement.style.setProperty("--cell-headerWeight", this.dataBase.table.cell.headerWeight);
    if (this.dataBase.table.cell?.headerStyle) this.elRef.nativeElement.style.setProperty("--cell-headerStyle", this.dataBase.table.cell.headerStyle);
    if (this.dataBase.table.bodyPadding?.left) this.elRef.nativeElement.style.setProperty("--bodyPadding-left", this.dataBase.table.bodyPadding?.left);
    if (this.dataBase.table.bodyPadding?.top) this.elRef.nativeElement.style.setProperty("--bodyPadding-top", this.dataBase.table.bodyPadding?.top);
    if (this.dataBase.table.bodyPadding?.right) this.elRef.nativeElement.style.setProperty("--bodyPadding-right", this.dataBase.table.bodyPadding?.right);
    if (this.dataBase.table.bodyPadding?.bottom) this.elRef.nativeElement.style.setProperty("--bodyPadding-bottom", this.dataBase.table.bodyPadding?.bottom);
    if (this.dataBase.table.headerPadding?.left) this.elRef.nativeElement.style.setProperty("--headerPadding-left", this.dataBase.table.headerPadding?.left);
    if (this.dataBase.table.headerPadding?.top) this.elRef.nativeElement.style.setProperty("--headerPadding-top", this.dataBase.table.headerPadding?.top);
    if (this.dataBase.table.headerPadding?.right) this.elRef.nativeElement.style.setProperty("--headerPadding-right", this.dataBase.table.headerPadding?.right);
    if (this.dataBase.table.headerPadding?.bottom) this.elRef.nativeElement.style.setProperty("--headerPadding-bottom", this.dataBase.table.headerPadding?.bottom);
  }
}
