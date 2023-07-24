import { GenericField } from "./GenericField";

export class MaskedText extends GenericField {
    constructor(
        label: string,
        key: string,
        public mask: string,
        hide?: boolean,
    ) {
        super(label, key, hide);
    }
}