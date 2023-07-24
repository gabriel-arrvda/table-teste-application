import { ITableController } from "../interface/Table";
import { ChildGenericField, MaskedText, SimpleText } from "../models/fields/fields";

export class TableService implements ITableController {
    headers!: string[];

    load(): Promise<string> {
        throw new Error("Method not implemented.");
    }

    getHeaders(): ChildGenericField | SimpleText | MaskedText[] {
        throw new Error("Method not implemented.");
    }

    genericFields!: ChildGenericField | SimpleText | MaskedText[];
}