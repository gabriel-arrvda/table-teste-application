export class Table {
    constructor(
        public border: boolean,
        public striped: boolean,
        public font?: Font,
    ) { }
}

export class Font {
    constructor(
        public bodyName?: string,
        public bodyFamily?: string,
        public headerName?: string,
        public headerFamily?: string,
        public bodySize?: string,
        public headerSize?: string,
        public bodyColor?: string,
        public headerColor?: string,
        public bodyWeight?: number | string,
        public headerWeight?: number | string,
        public bodyStyle?: string,
        public headerStyle?: string,
    ) { }
}