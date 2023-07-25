import { TableController } from "../controllers/TableController";
import { ChildField, DateField, MaskedText, MoneyField, SimpleText } from "../models/fields/fields";
import { ITableController } from "../interfaces/ITableController";

export class TableDatabase extends TableController implements ITableController {
    override genericFields!: ChildField[] | SimpleText[] | MaskedText[] | DateField[] | MoneyField[];

    override load(): Promise<any[]> {
        const data = [
            {
                "name": "John Doe",
                "jobTitle": "Software Engineer",
                "age": 30,
                "salary": 75000
            },
            {
                "name": "Jane Smith",
                "jobTitle": "Data Scientist",
                "age": 28,
                "salary": 80000
            },
            {
                "name": "Michael Johnson",
                "jobTitle": "Product Manager",
                "age": 35,
                "salary": 90000
            },
            {
                "name": "Emily Brown",
                "jobTitle": "UX Designer",
                "age": 27,
                "salary": 70000
            }
        ];

        return Promise.resolve(data);
    }

    override setFields() {
        this.genericFields = [
            new SimpleText("Nome", "name"),
            new SimpleText("Cargo", "jobTitle"),
            new SimpleText("Idade", "age"),
            new MoneyField("Salário", "salary", true, "BRL")
        ];

        return Promise.resolve();
    }

    override setTableConfig() {
        this.table = {
            border: true,
            striped: true,
        };
    }
}