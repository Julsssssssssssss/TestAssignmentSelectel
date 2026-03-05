import { Routes } from '@angular/router';
import { Page_1_Component } from './layouts/pages/page-1.component';
import { Page_2_Component } from './layouts/pages/page-2.component';

export const routes: Routes = [
    { path: '', redirectTo: 'first-page',pathMatch: 'full'},
    { path: 'first-page', component: Page_1_Component},
    { path: 'second-page', component: Page_2_Component},
    { path: '**', redirectTo: 'first-page'},
    
];
