import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutInputFormComponent } from './workout-input-form.component';

describe('WorkoutInputFormComponent', () => {
  let component: WorkoutInputFormComponent;
  let fixture: ComponentFixture<WorkoutInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutInputFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
