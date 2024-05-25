import { AbstractControl, ValidationErrors } from "@angular/forms";

export const confirmPasswordValidator = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');


  return password && confirmPassword && password.value !== confirmPassword.value ? {confirmPassword: true} : null;  
}