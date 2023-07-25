import { GenericField } from "./GenericField";

export class ChildField extends GenericField {
    constructor(
        label: string,
        key: string,
        public path: [string],
        hide?: boolean,
    ) {
        super(label, key, hide);
    }
}