import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSpaceComponent } from './register-space.component';

describe('RegisterSpaceComponent', () => {
  let component: RegisterSpaceComponent;
  let fixture: ComponentFixture<RegisterSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
