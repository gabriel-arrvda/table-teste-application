import { GenericField } from "./GenericField";

export class MoneyField extends GenericField {
    constructor(
        label: string,
        key: string,
        public locale: string,
        verticalAlign: "top" | "middle" | "bottom",
        horizontalAlign: "left" | "center" | "right",
        hide?: boolean,
    ) {
        super(label, key, verticalAlign, horizontalAlign, hide);
    }
}