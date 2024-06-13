import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  // In your component.ts
  steps = new Array(9).fill(null).map((_, index) => index + 1);
  currentStep = 1; // This can be dynamically updated based on user interaction

  formGroup!: FormGroup;
  inputText: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      inputText: ['']
    });
  }

  updateText(): void {
    this.inputText = this.formGroup.get('inputText')?.value;
  }

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
