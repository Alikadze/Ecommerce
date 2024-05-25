import { Component, inject } from '@angular/core';
import { AuthHeadComponent } from '../auth-head/auth-head.component';
import { InputComponent } from '../../../components/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe, NgClass } from '@angular/common';
import { ButtonComponent } from '../../../ui/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { AuthFacade } from '../../../facades';
import { AuthPayload } from '../../../core/interfaces';
import { AlertComponent } from "../../../components/alert/alert.component";
import { catchError, throwError } from 'rxjs';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../auth-styles.scss'],
    imports: [
        AuthHeadComponent,
        InputComponent,
        ReactiveFormsModule,
        JsonPipe,
        ButtonComponent,
        NgClass,
        RouterLink,
        AlertComponent,
    ],
})
export class LoginComponent {
    
  form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),]),
    password: new FormControl('', Validators.required),
  });


  authFacade = inject(AuthFacade);

  errorMessage: string | null = null;
  successMessage: string | null = null;

  router = inject(Router);

 
  onSubmit () {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    this.errorMessage = null;
    this.successMessage = null;

    const {email, password} = this.form.value as {email: string,password: string};

    email.trim();
    password.trim();
  
    const payload: AuthPayload = {
      email,
      password
    }

    this.authFacade.login(payload)
      .pipe(
        catchError(err => {
          this.errorMessage = this.formatErrorMessage(err.error.error.message);
          return throwError(() => err);
        })
      )
      .subscribe( res => {
        if (res) {
          this.successMessage = 'You have successfully logged in';
            setTimeout(() => {
              this.router.navigate(['/'])
            }, 2000)
        }

      })
  }

  formatErrorMessage(error: string): string {
    return error
      .toLowerCase() 
      .split('_')    
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' ');    
  }
}
