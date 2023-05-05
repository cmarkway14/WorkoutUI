import { WorkoutLandingComponent } from "./Workout/workout-landing/workout-landing.component";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
import { LandingComponent } from "./landing/landing.component";

export const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'workout', component: WorkoutLandingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
