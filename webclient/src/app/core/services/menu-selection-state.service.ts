import { Injectable, signal, computed } from '@angular/core';


export interface MenuHeaderState {
  sectionTitle: string | null;
  selectedCount: number;
  totalValue: number;
}

@Injectable({ providedIn: 'root' })
export class MenuSelectionStateService {
  private readonly state = signal<MenuHeaderState>({
    sectionTitle: null,
    selectedCount: 0,
    totalValue: 0,
  });

  readonly headerState = this.state.asReadonly();

  setState(value: MenuHeaderState): void {
    this.state.set(value);
  }

  clearState(): void {
    this.state.set({
      sectionTitle: null,
      selectedCount: 0,
      totalValue: 0,
    });
  }
}
