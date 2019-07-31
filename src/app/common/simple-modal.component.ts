import { Input, Component, ViewChild, ElementRef, Inject } from "@angular/core";
import { TOKEN_JQUERY } from './jquery-service';

@Component({
    selector: "simple-modal",
    template: `
    <div id="{{elementId}}" #modalContainer class="modal fade" tabIndex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div class="modal.body" (click)="closeModal()">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [`
    .modal-body { height: 250px; overflow-y: scroll; }
    `]
})
export class SimpleModalComponent {
    @Input() title:string
    @Input() elementId: string
    @ViewChild('modalContainer', null) containerElement : ElementRef
    @Input() closeOnClick: string
    constructor(@Inject(TOKEN_JQUERY) private jquery : any) {

    }

    closeModal() {

        if (this.closeOnClick.toLocaleLowerCase() == "true") {
            this.jquery(this.containerElement.nativeElement).modal('hide')
        }       
    }
}