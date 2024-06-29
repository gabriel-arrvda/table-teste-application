export function hexToRgb(hex: string): string {
    let alpha = false, h: string | number = hex.slice(hex.startsWith('#') ? 1 : 0);
    if (h.length === 3) h = [...h].map(x => x + x).join('');
    else if (h.length === 8) alpha = true;
    h = parseInt(h, 16);
    return (
        'rgb' +
        (alpha ? 'a' : '') +
        '(' +
        (h >>> (alpha ? 24 : 16)) +
        ',' +
        ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
        ',' +
        ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
        (alpha ? `, ${h & 0x000000ff}` : '') +
        ')'
    );
}

export function rgbToHsl(hex: string) {
    hex.split(',').map(x => x.trim());
    const r = parseInt(hex.split(',')[0].split('(')[1].split(')')[0], 10) / 255;
    const g = parseInt(hex.split(',')[1], 10) / 255;
    const b = parseInt(hex.split(',')[2].split(')')[0], 10) / 255;

    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
        ? l === r
            ? (g - b) / s
            : l === g
                ? 2 + (b - r) / s
                : 4 + (r - g) / s
        : 0;

    return [
        60 * h < 0 ? 60 * h + 360 : 60 * h,
        100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
        (100 * (2 * l - s)) / 2,
    ];
}