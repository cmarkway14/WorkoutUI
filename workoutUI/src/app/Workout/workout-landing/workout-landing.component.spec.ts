import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutLandingComponent } from './workout-landing.component';

describe('WorkoutLandingComponent', () => {
  let component: WorkoutLandingComponent;
  let fixture: ComponentFixture<WorkoutLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
