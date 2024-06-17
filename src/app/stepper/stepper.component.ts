import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  // In your component.ts
  steps = new Array(10).fill(null).map((_, index) => index + 1);

  constructor(private formBuilder: FormBuilder, private shared: SharedService) {}

  get currentStep() {
    return this.shared.currentStep;
  }

  get selectedImageUrl() {
    return this.shared.selectedImageUrl;
  }

  get inputSelect() {
    return this.shared.inputSelect;
  }

  get inputText() {
    return this.shared.inputText;
  }

  get nbrLines() {
    return this.shared.nbrLines;
  }

  get telText() {
    return this.shared.telText;
  }

  get addressText() {
    return this.shared.addressText;
  }

  get isOil() {
    return this.shared.isOil;
  }

  get inputDateRadio() {
    return this.shared.inputDateRadio;
  }

  get inputNextDate() {
    return this.shared.inputNextDate;
  }

  ngOnInit() {
  }

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.shared.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.shared.currentStep--;
    }
  }
}
