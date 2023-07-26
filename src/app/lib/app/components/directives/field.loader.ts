import { Directive, Input, OnInit, ViewContainerRef } from "@angular/core";
import { ChildField, SimpleText, MaskedText, DateField, MoneyField } from "src/app/lib/models/fields/fields";
import { COMPONENTS } from "src/app/lib/app/components/fields/fields.index";

@Directive({
    selector: '[appGenusField]',
    standalone: true,
})
export class FieldLoaderDirective implements OnInit {
    @Input('appGenusField') config!: { field: ChildField | SimpleText | MaskedText | DateField | MoneyField, data: any };

    constructor(private viewContainerRef: ViewContainerRef) { }

    ngOnInit(): void {
        const component = COMPONENTS[this.config.field.constructor.name];
        const componentRef: any = this.viewContainerRef.createComponent(component);
        componentRef.instance.field = this.config.field;
        componentRef.instance.data = this.config.data;
    }
}