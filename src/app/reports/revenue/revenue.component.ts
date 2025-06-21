import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-revenue-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent {
  revenues = [
    { space: 'Food Court', amount: 45000, month: 'May' },
    { space: 'Cinema Hall', amount: 120000, month: 'May' },
    { space: 'Atrium - North', amount: 25000, month: 'May' }
  ];

  totalRevenue(): number {
    return this.revenues.reduce((sum, r) => sum + r.amount, 0);
  }
}
