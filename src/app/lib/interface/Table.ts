import { ChildGenericField, MaskedText, SimpleText } from "../models/fields/fields";

export abstract class ITableController {

    genericFields: ChildGenericField | SimpleText | MaskedText[] = [];
    headers: string[] = [];

    load(): Promise<string> {
        throw new Error("Method not implemented.");
    }

    getHeaders(): ChildGenericField | SimpleText | MaskedText[] {
        throw new Error("Method not implemented.");
    }
}