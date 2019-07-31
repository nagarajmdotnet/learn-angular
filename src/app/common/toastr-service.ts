import { InjectionToken } from '@angular/core';

export let TOKEN_TOASTR = new InjectionToken<Toastr>('this is toastr desc')

export interface Toastr {
    success(message?: string, title?: string) : void;
    win(message?: string, title?: string) : void;
    info(message?: string, title?: string) : void;
    warning(message?: string, title?: string) : void;
}