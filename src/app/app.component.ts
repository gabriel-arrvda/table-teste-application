import { Component, signal } from '@angular/core';
import { ITableController } from './lib/interfaces/ITableController';
import { TableDatabase } from './table.database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'table-teste-application';

  private readonly dataBase: ITableController = new TableDatabase();
  dataBaseSignal = signal<ITableController | null>(null);

  constructor() {
    this.init();
  }

  async init() {
    console.log("🚀 ~ AppComponent ~ init ~ this.dataBaseSignal():", this.dataBaseSignal());
    await this.dataBase.init();
    this.dataBaseSignal.set(this.dataBase);
    console.log("🚀 ~ AppComponent ~ init ~ this.dataBaseSignal():", this.dataBaseSignal());
  }

  checkboxChanged(event: any) {
    const checkbox = event.target;
    console.log(checkbox.checked);
    this.dataBase.table.border = checkbox.checked;
  }
}
