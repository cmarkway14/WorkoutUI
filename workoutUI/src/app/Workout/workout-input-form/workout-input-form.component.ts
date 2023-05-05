import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-workout-input-form',
  templateUrl: './workout-input-form.component.html',
  styleUrls: ['./workout-input-form.component.css']
})
export class WorkoutInputFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      date: '',
      duration: 0,
      caloriesBurned: 0
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  ngOnInit(): void {
  }

}
