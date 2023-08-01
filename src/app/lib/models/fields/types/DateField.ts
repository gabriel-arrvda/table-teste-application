import { GenericField } from "./GenericField";

export class DateField extends GenericField {
    constructor(
        label: string,
        key: string,
        public dateType: 'unix' | 'timestamp',
        public format: string,
        verticalAlign: "top" | "middle" | "bottom",
        horizontalAlign: "left" | "center" | "right",
        hide?: boolean,
    ) {
        super(label, key, verticalAlign, horizontalAlign, hide);
    }
}