import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mask',
    standalone: true
})
export class FormatPipe implements PipeTransform {

    transform(value: string, format: string): unknown {
        if (value && value.trim() != '') {
            return this.replaceWithFiller(value, format);
        }

        return value;
    }

    replaceWithFiller(filler: any, str: string, matcher = /[X]/g) {
        const arr = filler.split('');
        return str.replace(matcher, () => arr.shift());
    }
}
