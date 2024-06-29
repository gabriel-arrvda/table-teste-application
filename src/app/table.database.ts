import { TableController } from "./lib/controllers/TableController";
import { ITableController } from "./lib/interfaces/ITableController";
import { ChildField, SimpleText, MaskedText, DateField, MoneyField } from "./lib/models/fields/fields";
import { Table } from "./lib/models/table/table";
import database from './employees.json';

export class TableDatabase extends TableController implements ITableController {
    override genericFields!: ChildField[] | SimpleText[] | MaskedText[] | DateField[] | MoneyField[];
    override table!: Table;

    override load(): Promise<any[]> {
        return Promise.resolve(database.employees);
    }

    override setFields() {
        this.genericFields = [
            new SimpleText("Nome", "name", "middle", "center"),
            new SimpleText("Idade", "age", "middle", "center"),
            new MaskedText("Telefone", "phone", "(XX) X XXXX-XXXX", "middle", "center"),
            new DateField("Data de Nascimento", "birthdate_sql", "timestamp", "dd/MM/yyyy", "middle", "center"),
            new DateField("Data de Nascimento", "birthdate_unix", "unix", "dd/MM/yyyy", "middle", "center"),
            new MoneyField("Salário", "salary", "BRL", "middle", "center"),
            new ChildField("Cidade", "address", ["city"], "middle", "center")
        ];

        return Promise.resolve();
    }

    override setTableConfig() {
        this.table = {
            border: true,
            striped: true,
            cell: {
                bodyName: "Roboto",
                headerName: "Roboto",
                bodyBg: "#fff",
            }
        };
    }
}