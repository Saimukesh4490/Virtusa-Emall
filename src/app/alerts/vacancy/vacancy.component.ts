import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent {
  vacancies = [
    { space: 'Food Court', availableFrom: '2025-07-01', duration: '2 weeks' },
    { space: 'Cinema Hall', availableFrom: '2025-07-10', duration: '1 month' },
    { space: 'Atrium South', availableFrom: '2025-07-15', duration: '3 days' },
  ];
}
