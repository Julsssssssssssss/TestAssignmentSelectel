import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { MenuSelectionStateService } from "../../core/services/menu-selection-state.service";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.html',
    styleUrls: ['./header.scss'],
})

export class HeaderComponent {
    private readonly router = inject(Router);
    private readonly selectionState = inject(MenuSelectionStateService);

    readonly headerState = this.selectionState.headerState;

    isSecondPage():  boolean {
        return this.router.url.includes('second-page');
    }

    getCurrentPageTitle(): string {
        return this.router.url.includes('second-page') ? '2 страница' : '1 страница';
    }
}