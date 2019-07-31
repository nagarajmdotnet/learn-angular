import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession, restrictedWords } from '../shared';

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
         em {float:right; color:#E05C65; padding-left:10px}
        .error input {background-color: #E3C3C5}
        .error textArea {background-color: #E3C3C5}
        `]
})
export class CreateSessionComponent implements OnInit {
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;
    newSessionForm: FormGroup;

    @Output() addNewSessionEvent = new EventEmitter()
    @Output() cancelAddSessionEvent = new EventEmitter()

    constructor() {

    }

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(100), restrictedWords(['foo','bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    saveSession(formValues) {
        let session: ISession = {
                id : undefined,
                name: formValues.name,
                presenter: formValues.presenter,
                duration : +formValues.duration,
                level : formValues.level,
                abstract : formValues.abstract,
                voters: []
        }

        this.addNewSessionEvent.emit(session)
    }

    cancelSession() {
        this.cancelAddSessionEvent.emit()
    }
}