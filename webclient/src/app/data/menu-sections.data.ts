import type { MenuSection } from '../core/models/menu.model';


export const MENU_SECTIONS: MenuSection[] = [
  {
    id: 'type-1',
    title: 'Тип 1',
    items: [
      { id: 't1-1', label: 'Item 1', value: 20 },
      { id: 't1-2', label: 'Item 2', value: 30 },
      { id: 't1-3', label: 'Item 3', value: 40 },
      { id: 't1-4', label: 'Item 4', value: 50 },
    ],
  },
  {
    id: 'type-2',
    title: 'Тип 2',
    items: [
      { id: 't2-1', label: 'Element A', value: 10 },
      { id: 't2-2', label: 'Element B', value: 25 },
      { id: 't2-3', label: 'Element C', value: 35 },
      { id: 't2-4', label: 'Element D', value: 60 },
    ],
  },
];
