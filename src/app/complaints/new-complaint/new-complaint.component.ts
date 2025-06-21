import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-complaint',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-complaint.component.html',
  styleUrls: ['./new-complaint.component.css']
})
export class NewComplaintComponent {
  complaint = {
    type: '',
    description: ''
  };

  submitComplaint() {
    alert(`Complaint Submitted:\nType: ${this.complaint.type}\nDescription: ${this.complaint.description}`);
    this.complaint = { type: '', description: '' };
  }
}
