import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  complaints = [
    {
      id: 1,
      category: 'Plumbing',
      description: 'Water leakage near Food Court',
      date: '2025-06-20',
      status: 'Resolved'
    },
    {
      id: 2,
      category: 'Security',
      description: 'Unauthorized access at back gate',
      date: '2025-06-18',
      status: 'Pending'
    },
    {
      id: 3,
      category: 'Electricity',
      description: 'Lights flickering in Cinema Hall',
      date: '2025-06-16',
      status: 'In Progress'
    }
  ];
}
