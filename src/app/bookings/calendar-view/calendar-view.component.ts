import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent {
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  daysInMonth: { date: string; booked: boolean; space?: string }[] = [];

  // Example booked data (can be replaced with dynamic data)
  bookings = [
    { date: '2025-06-12', space: 'Atrium West' },
    { date: '2025-06-15', space: 'Food Court' },
    { date: '2025-06-21', space: 'Theater' }
  ];

  ngOnInit() {
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  generateCalendar(year: number, month: number) {
    this.daysInMonth = [];
    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= totalDays; day++) {
      const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`;

      const booking = this.bookings.find(b => b.date === dateStr);

      this.daysInMonth.push({
        date: dateStr,
        booked: !!booking,
        space: booking?.space
      });
    }
  }
}
