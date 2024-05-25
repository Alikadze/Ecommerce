
import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {AuthHeadComponent} from "../auth-head/auth-head.component";
import {AlertComponent} from "../../../components/alert/alert.component";
import {ButtonComponent} from "../../../ui/button/button.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "../../../components/input/input.component";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AuthFacade} from "../../../facades";
import {catchError, Subject, takeUntil, throwError} from "rxjs";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [
    AuthHeadComponent,
    AlertComponent,
    ButtonComponent,
    FormsModule,
    InputComponent,
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './recovery.component.html',
  styleUrls: ['../auth-styles.scss', './recovery.component.scss']
})
export class RecoveryComponent implements OnDestroy{

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  authFacade = inject(AuthFacade)

  sub$ = new Subject()

  errorMessage: string | null = null
  successMessage: string | null = null

  sendLink() {
    this.form.markAllAsTouched()
    if (this.form.invalid) {
      return
    }
    this.authFacade.sendOobCode(this.form.value.email as string)
      .pipe(
        takeUntil(this.sub$),
        catchError(({error}) => {
          this.errorMessage = error.error.message
          return throwError(() => error.error.message)
        })
      )
      .subscribe((res) => {
        this.successMessage = 'Email sent. Check your inbox.';
      })
  }

  ngOnDestroy() {
    this.sub$.next(null)
    this.sub$.complete()
  }
}
