import { Component, OnInit } from '@angular/core';
import { ITableController } from './lib/interfaces/ITableController';
import { TableDatabase } from './table.database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'table-teste-application';

  dataBase!: ITableController;

  async ngOnInit() {
    const dataBase = new TableDatabase();
    await dataBase.init();
    this.dataBase = dataBase;
  }
}
