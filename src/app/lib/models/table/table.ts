export class Table {
    constructor(
        public border: boolean,
        public striped: boolean,
        public bodyPadding?: Padding,
        public headerPadding?: Padding,
        public cell?: Cell,
    ) { }
}

export class Cell {
    constructor(
        public bodyName?: string,
        public bodyFamily?: string,
        public headerName?: string,
        public headerFamily?: string,
        public bodySize?: string,
        public headerSize?: string,
        public bodyColor?: string,
        public bodyBg?: string,
        public headerColor?: string,
        public headerBg?: string,
        public bodyWeight?: number | string,
        public headerWeight?: number | string,
        public bodyStyle?: string,
        public headerStyle?: string,
    ) { }
}

export class Padding {
    public left?: string;
    public top?: string;
    public right?: string;
    public bottom?: string;
}