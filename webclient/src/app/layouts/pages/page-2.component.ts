import { Component, inject, signal, computed, effect } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MenuDataService } from '../../core/services/menu-data.service';
import { MenuSelectionStateService } from '../../core/services/menu-selection-state.service';
import type { MenuItem } from '../../core/models/menu.model';

@Component({
  selector: 'app-psge-2',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './page-2.html',
  styleUrl: './page-2.scss',
})
export class Page_2_Component {
  private readonly menuData = inject(MenuDataService);
  private readonly selectionState = inject(MenuSelectionStateService);

  readonly items = signal<MenuItem[]>([]);
  readonly selectedIds = signal<Set<string>>(new Set());

  readonly selectedCount = computed(() => {
    const ids = this.selectedIds();
    return this.items().filter((item) => ids.has(item.id)).length;
  });

  readonly totalValue = computed(() => {
    const ids = this.selectedIds();
    return this.items()
      .filter((item) => ids.has(item.id))
      .reduce((sum, item) => sum + item.value, 0);
  });

  constructor() {
    this.menuData.getSections().subscribe((sections) => {
      const firstSection = sections[0];
      this.items.set(firstSection ? firstSection.items : []);
    });

    effect(() => {
      this.selectionState.setState({
        sectionTitle: null,
        selectedCount: this.selectedCount(),
        totalValue: this.totalValue(),
      });
    });
  }

  toggleItem(id: string): void {
    const next = new Set(this.selectedIds());
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    this.selectedIds.set(next);
  }

  isSelected(id: string): boolean {
    return this.selectedIds().has(id);
  }
}
