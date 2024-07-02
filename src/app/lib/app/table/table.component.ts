import { Component, input, ElementRef, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITableController } from '../../interfaces/ITableController';
import { FieldLoaderDirective } from '../components/directives/field.loader';
import { hexToRgb, rgbToHsl } from '../utils/colors';
import { PaginatorComponent } from './paginator/paginator.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FieldLoaderDirective, PaginatorComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  dataBase = input<ITableController | null>();

  constructor(private elRef: ElementRef) {
    effect(() => {
      const dataBase = this.dataBase();
      console.log("🚀 ~ TableComponent ~ effect ~ this.dataBase():", this.dataBase());
      if (dataBase) this.setTableProperties(dataBase);
    });
  }

  setTableProperties(dataBase: ITableController) {
    if (dataBase.table.striped) {
      let color: string | number[];
      if (dataBase.table.cell?.bodyBg) color = hexToRgb(dataBase.table.cell.bodyBg);
      else color = "rgb(255, 255, 255)";
      color = rgbToHsl(color);
      this.elRef.nativeElement.style.setProperty("--cell-stripedBg", `hsl(${color[0]}, ${color[1]}%, ${color[2] * 0.97}%)`);
    }

    if (dataBase.table.cell?.bodyName) this.elRef.nativeElement.style.setProperty("--cell-bodyName", dataBase.table.cell.bodyName);
    if (dataBase.table.cell?.bodyFamily) this.elRef.nativeElement.style.setProperty("--cell-bodyFamily", dataBase.table.cell.bodyFamily);
    if (dataBase.table.cell?.bodySize) this.elRef.nativeElement.style.setProperty("--cell-bodySize", dataBase.table.cell.bodySize);
    if (dataBase.table.cell?.bodyColor) this.elRef.nativeElement.style.setProperty("--cell-bodyColor", dataBase.table.cell.bodyColor);
    if (dataBase.table.cell?.bodyBg) this.elRef.nativeElement.style.setProperty("--cell-bodyBg", dataBase.table.cell.bodyBg);
    if (dataBase.table.cell?.bodyStyle) this.elRef.nativeElement.style.setProperty("--cell-bodyStyle", dataBase.table.cell.bodyStyle);
    if (dataBase.table.cell?.bodyWeight) this.elRef.nativeElement.style.setProperty("--cell-bodyWeight", dataBase.table.cell.bodyWeight);
    if (dataBase.table.cell?.headerName) this.elRef.nativeElement.style.setProperty("--cell-headerName", dataBase.table.cell.headerName);
    if (dataBase.table.cell?.headerFamily) this.elRef.nativeElement.style.setProperty("--cell-headerFamily", dataBase.table.cell.headerFamily);
    if (dataBase.table.cell?.headerSize) this.elRef.nativeElement.style.setProperty("--cell-headerSize", dataBase.table.cell.headerSize);
    if (dataBase.table.cell?.headerColor) this.elRef.nativeElement.style.setProperty("--cell-headerColor", dataBase.table.cell.headerColor);
    if (dataBase.table.cell?.headerBg) this.elRef.nativeElement.style.setProperty("--cell-headerBg", dataBase.table.cell.headerBg);
    if (dataBase.table.cell?.headerWeight) this.elRef.nativeElement.style.setProperty("--cell-headerWeight", dataBase.table.cell.headerWeight);
    if (dataBase.table.cell?.headerStyle) this.elRef.nativeElement.style.setProperty("--cell-headerStyle", dataBase.table.cell.headerStyle);
    if (dataBase.table.bodyPadding?.left) this.elRef.nativeElement.style.setProperty("--bodyPadding-left", dataBase.table.bodyPadding?.left);
    if (dataBase.table.bodyPadding?.top) this.elRef.nativeElement.style.setProperty("--bodyPadding-top", dataBase.table.bodyPadding?.top);
    if (dataBase.table.bodyPadding?.right) this.elRef.nativeElement.style.setProperty("--bodyPadding-right", dataBase.table.bodyPadding?.right);
    if (dataBase.table.bodyPadding?.bottom) this.elRef.nativeElement.style.setProperty("--bodyPadding-bottom", dataBase.table.bodyPadding?.bottom);
    if (dataBase.table.headerPadding?.left) this.elRef.nativeElement.style.setProperty("--headerPadding-left", dataBase.table.headerPadding?.left);
    if (dataBase.table.headerPadding?.top) this.elRef.nativeElement.style.setProperty("--headerPadding-top", dataBase.table.headerPadding?.top);
    if (dataBase.table.headerPadding?.right) this.elRef.nativeElement.style.setProperty("--headerPadding-right", dataBase.table.headerPadding?.right);
    if (dataBase.table.headerPadding?.bottom) this.elRef.nativeElement.style.setProperty("--headerPadding-bottom", dataBase.table.headerPadding?.bottom);
  }
}
