import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // if (control.errors && Object.keys(control.errors).filter(x => x !== 'email').length > 0) {
    //     return null;
    // }

    if (!control.value) {
        return null;
    }
    if (!/^.{6,}@gmail\.(com|bg)$/.test(control.value)) {
        return { email: true };
    }
    return null;
}