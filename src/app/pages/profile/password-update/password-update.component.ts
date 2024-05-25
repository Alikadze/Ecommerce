import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../../components/input/input.component";
import { ButtonComponent } from "../../../ui/button/button.component";
import { confirmPasswordValidator } from '../../../core/validators/confirm-password.validator';
import { NgIf } from '@angular/common';
import { AlertComponent } from "../../../components/alert/alert.component";
import { AuthFacade } from '../../../facades';
import { Router } from '@angular/router';

@Component({
    selector: 'app-password-update',
    standalone: true,
    templateUrl: './password-update.component.html',
    styleUrl: './password-update.component.scss',
    imports: [
        ReactiveFormsModule,
        InputComponent,
        ButtonComponent,
        NgIf,
        AlertComponent
    ]
})
export class PasswordUpdateComponent {
  form = new FormGroup({
    password: new FormControl<string>('',[
      Validators.required, 
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
    ]),

    confirmPassword: new FormControl('', Validators.required)

  }, {validators: confirmPasswordValidator})

  authFacade = inject(AuthFacade)

  reseted: Boolean = false;

  router = inject(Router)

  onSubmit(){
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return
    }


    const password: string = this.form.value.password as string;

    this.authFacade.changePassword(password)
      .subscribe( () => {
        this.form.reset();

        this.reseted = true;

        setTimeout(() => {
          this.router.navigate(['/'])
        }, 2000)
      })
  }
}
