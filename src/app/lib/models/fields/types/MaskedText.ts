import { GenericField } from "./GenericField";

export class MaskedText extends GenericField {
    constructor(
        label: string,
        key: string,
        public mask: string,
        verticalAlign: "top" | "middle" | "bottom",
        horizontalAlign: "left" | "center" | "right",
        hide?: boolean,
    ) {
        super(label, key, verticalAlign, horizontalAlign, hide);
    }
}