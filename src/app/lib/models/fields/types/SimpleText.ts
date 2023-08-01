import { GenericField } from "./GenericField";

export class SimpleText extends GenericField {
    constructor(
        label: string,
        key: string,
        verticalAlign: "top" | "middle" | "bottom",
        horizontalAlign: "left" | "center" | "right",
        hide?: boolean,
    ) {
        super(label, key, verticalAlign, horizontalAlign, hide);
    }
}