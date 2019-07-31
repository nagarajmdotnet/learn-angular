import { Directive, Inject, Input, OnInit, ElementRef } from "@angular/core";
import { TOKEN_JQUERY } from './jquery-service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private element: HTMLElement
    @Input('modal-trigger') modalId: string

    constructor(el: ElementRef, @Inject(TOKEN_JQUERY) private jquery : any) {
        this.element = el.nativeElement
    }

    ngOnInit() {
        this.element.addEventListener('click', e => {

            this.jquery(`#${this.modalId}`).modal({})
            
        })
    }

}