import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WorkoutLandingComponent } from './Workout/workout-landing/workout-landing.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'workout', component: WorkoutLandingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WorkoutLandingComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
