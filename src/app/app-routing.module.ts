import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  { path: '', component: StepperComponent }, // Default route
  { path: 'april', component: StepperComponent } // Route for /april
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
