import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-history',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>📚 Booking History</h2>
    <ul>
      <li>Shop 1 - 2024-10-21</li>
      <li>Food Court - 2024-10-18</li>
    </ul>
  `
})
export class HistoryComponent {}
