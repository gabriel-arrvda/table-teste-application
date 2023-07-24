import { GenericField } from "./GenericField";

export class SimpleText extends GenericField {
    constructor(
        label: string,
        key: string,
        hide?: boolean,
    ) {
        super(label, key, hide);
    }
}