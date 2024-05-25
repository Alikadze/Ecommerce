import { Component } from '@angular/core';
import {AsyncPipe, CurrencyPipe} from "@angular/common";
import {AuthHeadComponent} from "../../auth/auth-head/auth-head.component";
import {ButtonComponent} from "../../../ui/button/button.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "../../../components/input/input.component";
import {KeyValueComponent} from "../../../components/key-value/key-value.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-success-order',
  standalone: true,
    imports: [
        AsyncPipe,
        AuthHeadComponent,
        ButtonComponent,
        CurrencyPipe,
        FormsModule,
        InputComponent,
        KeyValueComponent,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './success-order.component.html',
  styleUrl: './success-order.component.scss'
})
export class SuccessOrderComponent {

}