import { Component, Input } from "@angular/core";

@Component({
    selector: "collapsible-well",
    template: `
        <div (click)="toggleClick()" class="well pointable">
            <h4>
                <ng-content select="[well-title]"></ng-content>
            </h4>
            <ng-content select="[well-body]" *ngIf="visible"></ng-content>
        </div>
    `
})
export class CollapsibleWellComponent {
    @Input() title: string
    visible: boolean = true;

    toggleClick() {
        this.visible = !this.visible
    }
}