import { BehaviorSubject } from "rxjs";
import { ChildField, DateField, MaskedText, MoneyField, SimpleText } from "../models/fields/fields";
import { Table } from "../models/table/table";

export class TableController {

    table!: Table;
    genericFields: ChildField[] | SimpleText[] | MaskedText[] | DateField[] | MoneyField[] = [];
    protected values$ = new BehaviorSubject<any[]>([]);

    async init() {
        await this.setFields();
        const value = await this.load();
        this.values$.next(value);
        this.setTableConfig();
    }

    get values() {
        return this.values$.asObservable();
    }

    load(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }

    setFields() {
        throw new Error("Method not implemented.");
    }

    setTableConfig() {
        throw new Error("Method not implemented.");
    }
}