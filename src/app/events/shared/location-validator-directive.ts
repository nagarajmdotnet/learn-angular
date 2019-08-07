import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, FormGroup, FormControl } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    providers: [ { provide : NG_VALIDATORS, useExisting : LocationValidator, multi : true } ]
})
export class LocationValidator implements Validator {
    validate(formGroup : FormGroup) : { [key:string] : any } {

        var addressControl = formGroup.controls['address'];
        var cityControl = formGroup.controls['city'];
        var countryControl = formGroup.controls['country'];
        var onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) 
            || (onlineUrlControl && onlineUrlControl.value))
        {
            return null;
        }
        else
        {
            return { validateLocation : false }
        }
    }
}