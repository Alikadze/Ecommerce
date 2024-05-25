import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AuthHeadComponent } from "../auth-head/auth-head.component";
import { InputComponent } from '../../../components/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../ui/button/button.component';
import { NgClass } from '@angular/common';
import { AuthPayload} from '../../../core/interfaces/auth-payload';
import { Subject, catchError, debounceTime, distinctUntilChanged, takeUntil, throwError } from 'rxjs';
import { AuthFacade } from '../../../facades';
import { Router } from '@angular/router';
import { AlertComponent } from "../../../components/alert/alert.component";

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [
        AuthHeadComponent,
        InputComponent,
        ReactiveFormsModule,
        ButtonComponent,
        NgClass,
        AlertComponent
    ]
})
export class RegisterComponent implements OnDestroy{
    form = new FormGroup({
        email: new FormControl<string>('',[Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),]),
        password: new FormControl<string>('', Validators.required),
    });


    
    authFacade = inject(AuthFacade);

    sub$ = new Subject();

    errorMessage: string | null = null;
    successMessage: string | null = null;
        
    router = inject(Router);
    

    onSubmit () {
        this.form.markAllAsTouched();

        if (this.form.invalid){
            return
        }

        
        this.errorMessage = null;
        this.successMessage = null;

        const {email, password} = this.form.value as {email: string, password: string};
        
        email.trim();
        password.trim();

        const payLoad: AuthPayload = {
            email,
            password,
            
        }

        this.authFacade.register(payLoad)
        .pipe(
            takeUntil(this.sub$),
            catchError(({error}) => {
                this.errorMessage = this.formatErrorMessage(error.error.message)
                return throwError(() => error.error.message)
            })
        )
        .subscribe((res) => {
            if (res) {
                this.successMessage = 'You have successfully Signed Up';
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

    ngOnDestroy(): void {
        this.sub$.next(null);
        this.sub$.complete();
    }

    get emailControl() {
        return this.form.get('email');
      }
}
