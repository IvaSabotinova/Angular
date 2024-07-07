import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

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

export function passwordMatch(passwordControl: AbstractControl) {
    const rePasswordValidator: ValidatorFn = (rePasswordControl: AbstractControl) => {
        if (rePasswordControl.value !== passwordControl.value) {
            return {
                passwordMismatch: true
            }
        }
        return null;
    }

    return rePasswordValidator;
}

export function passwordMatchVer02(passwordControl: AbstractControl) { //: ValidationErrors | null {
    const rePasswordValidator: ValidatorFn = () => {
        const passwordFormGroup = passwordControl.parent as FormGroup;
        if (!passwordFormGroup){
            return null;
        }
        const { password, rePassword } = passwordFormGroup.controls;
        if (password.value !== rePassword.value) {
            return {
                passwordMismatch: true
            }
        }
        return null;
    }

    return rePasswordValidator;
    // const passwordFormGroup = passwordControl.parent as FormGroup;
    // if (!passwordFormGroup){
    //     return null;
    // }
    // const { password, rePassword } = passwordFormGroup.controls;
    // if (password.value !== rePassword.value) {
    //     return {
    //         passwordMismatchVer02: true
    //     }
    // }
    // return null;
}