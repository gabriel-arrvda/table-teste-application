import { GenericField } from "./GenericField";

export class MoneyField extends GenericField {
    constructor(
        label: string,
        key: string,
        public money: boolean,
        public locale: string,
        hide?: boolean,
    ) {
        super(label, key, hide);
    }
}