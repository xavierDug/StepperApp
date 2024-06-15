import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  // In your component.ts
  steps = new Array(10).fill(null).map((_, index) => index + 1);
  currentStep = 1; // This can be dynamically updated based on user interaction

  formGroup1!: FormGroup;
  formGroup2!: FormGroup;
  formGroup3!: FormGroup;
  formGroup4!: FormGroup;

  // this is the garage name
  inputText: string = '';
  nbrLines: string = '';
  telText: string = '';
  addressText: string = '';
  isOil: string = '';
  inputDateRadio: string = '';
  inputNextDate: string = '';

  // this is the sticker template
  inputSelect: string = '';

  // this is the image url
  selectedImageUrl: string | ArrayBuffer | null | undefined = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup2 = this.formBuilder.group({
      inputText: [''],
      nbrLines: [''],
      telText: [''],
      addressText: ['']
    });
    this.formGroup1 = this.formBuilder.group({
      inputSelect: ['']
    });
    this.formGroup3 = this.formBuilder.group({
      isOil: ['']
    });
    this.formGroup4 = this.formBuilder.group({
      inputDateRadio: [''],
      inputNextDate: ['']
    });
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImageUrl = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }

  updateNbrLines(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.nbrLines = target.value;
    }
  }

  updateIsOil(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.isOil = target.value;
    }
  }

  updateDateRadio(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.inputDateRadio = target.value;

      if(this.inputDateRadio !== 'isDateNext'){
        this.inputNextDate = '';
      }
    }
  }

  updateNextDate(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.inputNextDate = target.value;
    }
  }

  updateText(): void {
    this.inputText = this.formGroup2.get('inputText')?.value;
    this.telText = this.formGroup2.get('telText')?.value;
    this.addressText = this.formGroup2.get('addressText')?.value;
  }

  updateSelectTemplate(): void {
    this.inputSelect = this.formGroup1.get('inputSelect')?.value;
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
