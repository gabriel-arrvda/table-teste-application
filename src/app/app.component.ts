import { Component, OnInit } from '@angular/core';
import { TableDatabase } from './lib/table/table.database';
import { ITableController } from './lib/interfaces/ITableController';

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
