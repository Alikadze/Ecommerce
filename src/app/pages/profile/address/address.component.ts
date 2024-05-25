import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../components/input/input.component';
import { ButtonComponent } from "../../../ui/button/button.component";

@Component({
    selector: 'app-address',
    standalone: true,
    templateUrl: './address.component.html',
    styleUrl: './address.component.scss',
    imports: [
        ReactiveFormsModule,
        InputComponent,
        ButtonComponent
    ]
})
export class AddressComponent {
  form = new FormGroup({
    streetAddress: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl(''),
    country: new FormControl('')
  })

}
