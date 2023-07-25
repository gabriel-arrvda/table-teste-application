import { GenericField } from "./GenericField";

export class DateField extends GenericField {
    constructor(
        label: string,
        key: string,
        public date: boolean,
        hide?: boolean,
    ) {
        super(label, key, hide);
    }
}