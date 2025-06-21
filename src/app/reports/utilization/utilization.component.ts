import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-utilization-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utilization.component.html',
  styleUrls: ['./utilization.component.css']
})
export class UtilizationComponent {
  usageData = [
    { space: 'Atrium - West', utilization: 92 },
    { space: 'Food Court', utilization: 87 },
    { space: 'Gaming Zone', utilization: 65 },
    { space: 'Shops - Medium', utilization: 78 }
  ];
}
