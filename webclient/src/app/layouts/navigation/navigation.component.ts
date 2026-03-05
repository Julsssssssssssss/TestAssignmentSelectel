import { Component, signal, inject } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'app-navigation',
    standalone:  true,
    imports: [MatListModule, RouterLink, RouterLinkActive],
    templateUrl: './navigation.html',
    styleUrl: './navigation.scss',
})

export class NaviComponent {
}