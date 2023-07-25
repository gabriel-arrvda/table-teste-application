import { Observable } from "rxjs";
import { ChildField, DateField, MaskedText, MoneyField, SimpleText } from "../models/fields/fields";
import { Table } from "../models/table/table";

export abstract class ITableController {
    table!: Table;
    genericFields!: ChildField[] | SimpleText[] | MaskedText[] | DateField[] | MoneyField[];

    async init(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    get values(): Observable<any[]> {
        throw new Error("Method not implemented.");
    }

    setFields() {
        throw new Error("Method not implemented.");
    }

    load(): void {
        throw new Error("Method not implemented.");
    }

    setTableConfig() {
        throw new Error("Method not implemented.");
    }
}