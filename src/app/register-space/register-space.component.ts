import { Component, OnInit } from '@angular/core';
import { SpaceService, Space } from 'src/app/services/space.service';

@Component({
  selector: 'app-register-space',
  templateUrl: './register-space.component.html',
  styleUrls: ['./register-space.component.css'] // ✅ add this line
})
export class RegisterSpaceComponent implements OnInit {
  spaces: Space[] = [];

  constructor(private spaceService: SpaceService) {}

  ngOnInit(): void {
    this.spaceService.getSpaces().subscribe(data => {
      this.spaces = data;
      console.log('Spaces loaded:', data);
    });
  }

  addSpace() {
    const newSpace: Space = {
      name: 'New Shop',
      location: 'Mall A',
      price: 7000
    };
    this.spaceService.addSpace(newSpace).subscribe(data => {
      console.log('Added Space:', data);
    });
  }
}
