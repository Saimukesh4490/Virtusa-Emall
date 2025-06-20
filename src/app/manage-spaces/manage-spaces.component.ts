import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-spaces',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-spaces.component.html',
  styleUrls: ['./manage-spaces.component.css']
})
export class ManageSpacesComponent {
  spaces = [
    { name: 'Food Court', type: 'Retail', price: 25000 },
    { name: 'Cinema Hall', type: 'Entertainment', price: 60000 }
  ];

  newSpace = {
    name: '',
    type: '',
    price: 0
  };

  addSpace() {
    if (this.newSpace.name && this.newSpace.type && this.newSpace.price !== null && this.newSpace.price >= 0) {
      this.spaces.push({ ...this.newSpace });
      this.newSpace = { name: '', type: '', price: 0 };
    } else {
      alert('Please fill all fields');
    }
  }

  removeSpace(index: number) {
    this.spaces.splice(index, 1);
  }
}
