import { Component, inject } from '@angular/core';
import { AuthFacade } from '../../facades';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthHeadComponent } from "../auth/auth-head/auth-head.component";

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    imports: [
        AsyncPipe,
        RouterOutlet,
        AuthHeadComponent,
        RouterLink,
        RouterLinkActive
    ]
})
export class ProfileComponent {

    authfacade = inject(AuthFacade);
Log: any;

    Logout(){
        this.authfacade.logOut();
    }
}
