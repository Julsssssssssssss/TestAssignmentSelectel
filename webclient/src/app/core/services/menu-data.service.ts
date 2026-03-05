import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import type { MenuSection } from '../models/menu.model';
import { MENU_SECTIONS } from '../../data/menu-sections.data';


@Injectable({ providedIn: 'root' })
export class MenuDataService {
  getSections(): Observable<MenuSection[]> {
    return of(MENU_SECTIONS);
  }
}
