import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-space',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-space.component.html',
  styleUrls: ['./register-space.component.css']
})
export class RegisterSpaceComponent {
  space = {
    name: '',
    type: '',
    size: '',
    rate: null
  };

  types = ['Shop - Small', 'Shop - Medium', 'Shop - Large', 'Atrium', 'Cinema Theater', 'Banner Area'];

  registerSpace() {
    if (!this.space.name || !this.space.type || !this.space.size || this.space.rate === null) {
      alert('Please fill all the fields!');
      return;
    }

    console.log('New Space Registered:', this.space);
    alert('Space Registered Successfully!');
    this.space = { name: '', type: '', size: '', rate: null };
  }
}
