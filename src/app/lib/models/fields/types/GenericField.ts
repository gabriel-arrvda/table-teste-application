export class GenericField {
    constructor(
        public label: string,
        public key: string,
        public verticalAlign: "top" | "middle" | "bottom",
        public horizontalAlign: "left" | "center" | "right",
        public hide = false,
    ) { }
}