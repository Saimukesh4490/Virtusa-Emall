import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css']
})
export class NewBookingComponent {
  booking = {
    space: '',
    date: ''
  };

  spaces = ['Cinema Hall', 'Food Court', 'Atrium North', 'Retail Shop', 'Gaming Zone'];

  submitted = false;

  book() {
    if (this.booking.space && this.booking.date) {
      this.submitted = true;
      alert(`✅ Booking confirmed!\n${this.booking.space} on ${this.booking.date}`);
      this.booking = { space: '', date: '' };
    } else {
      alert('⚠️ Please select both space and date.');
    }
  }
}
