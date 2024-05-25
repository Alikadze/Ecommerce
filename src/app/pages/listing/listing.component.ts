import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";

@Component({
    selector: 'app-listing',
    standalone: true,
    templateUrl: './listing.component.html',
    styleUrl: './listing.component.scss',
    imports: [BreadcrumbComponent]
})
export class ListingComponent {

}
