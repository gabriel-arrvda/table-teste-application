import { Directive, ViewContainerRef, effect, input } from "@angular/core";
import { ChildField, SimpleText, MaskedText, DateField, MoneyField } from "src/app/lib/models/fields/fields";
import { COMPONENTS } from "src/app/lib/app/components/fields/fields.index";

@Directive({
    selector: '[appGenusField]',
    standalone: true,
})
export class FieldLoaderDirective {
    config = input<{ field: ChildField | SimpleText | MaskedText | DateField | MoneyField | null, data: any }>({ field: null, data: undefined }, { alias: 'appGenusField' });

    constructor(private viewContainerRef: ViewContainerRef) {
        effect(() => {
            console.log("🚀 ~ FieldLoaderDirective ~ effect ~ this.config():", this.config());
            this.loadField(this.config());
        });
    }

    loadField(config: { field: ChildField | SimpleText | MaskedText | DateField | MoneyField | null, data: any }) {
        if (!config.field) return;
        const component = COMPONENTS[config.field.constructor.name];
        const componentRef: any = this.viewContainerRef.createComponent(component);
        componentRef.instance.field = config.field;
        componentRef.instance.data = config.data;
    }
}