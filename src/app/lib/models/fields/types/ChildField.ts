import { GenericField } from "./GenericField";

export class ChildField extends GenericField {
    constructor(
        label: string,
        key: string,
        public path: string[],
        verticalAlign: "top" | "middle" | "bottom",
        horizontalAlign: "left" | "center" | "right",
        hide?: boolean,
    ) {
        super(label, key, verticalAlign, horizontalAlign, hide);
    }
}