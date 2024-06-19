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
  steps = new Array(9).fill(null).map((_, index) => index + 1);
  stickerArray: any[] = [];

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

  get inputNbrMonths() {
    return this.shared.inputNbrMonths;
  }

  get inputAntiRouille() {
    return this.shared.inputAntiRouille;
  }

  ngOnInit() {
  }

  addInformationToArray() {
    const sticker = {
      selectedImageUrl: this.selectedImageUrl,
      inputSelect: this.inputSelect,
      inputText: this.inputText,
      nbrLines: this.nbrLines,
      telText: this.telText,
      addressText: this.addressText,
      isOil: this.isOil,
      inputDateRadio: this.inputDateRadio,
      inputNextDate: this.inputNextDate,
      inputNbrMonths: this.inputNbrMonths,
    };
    this.stickerArray.push(sticker);
  }

  deleteItem(index: number): void {
    this.stickerArray.splice(index, 1);
  }

  nextStep() {
    // Condition to open the modal instead of going to the next step directly
    if (this.shouldOpenModal()) {
      this.toggleModal();
    } else {
      this.proceedToNextStep();
    }
  }
  
  // Function to actually proceed to the next step
  proceedToNextStep() {
    if (this.currentStep < this.steps.length) {
      this.shared.currentStep++;
    }
  }
  
  // Function to toggle the modal visibility
  toggleModal() {
    document.getElementById('popup-modal')?.classList.toggle('hidden');
  }

  toggleToast() {
    document.getElementById('toast-success')?.classList.toggle('hidden');
  }

  toggleWarningToast() {
    document.getElementById('toast-warning')?.classList.toggle('hidden');
  }
  
  // Example function to decide when to open the modal
  shouldOpenModal(): boolean {
    // Implement your condition here
    // For example, open the modal only on a specific step
    if (
      this.currentStep === 4 &&
      !this.inputDateRadio &&
      !this.inputNextDate &&
      !this.inputNbrMonths
    ) {
      this.clearCurrentStickerNext();
      return false;
    } else {
      let autoCount = 0;
      for (const sticker of this.stickerArray) {
        if (
          this.inputDateRadio === sticker.inputDateRadio &&
          this.inputNextDate === sticker.inputNextDate &&
          this.currentStep === 4 &&
          this.inputNbrMonths === sticker.inputNbrMonths
        ) {
          this.toggleWarningToast();
          this.clearCurrentStickerNext();
          return false;
        }
        if (sticker.inputNextDate === 'auto') {
          autoCount++;
        }
      }
      if (autoCount >= 2) {
        this.toggleWarningToast();
        this.clearCurrentStickerNext();
        return false;
      }
    }

    return this.currentStep === 4;
  }
  
  // Function to be called by the modal's "Stay on this step" button
  stayOnStep() {
    this.addInformationToArray(); // Add the information to the array
    this.toggleModal();
    this.toggleToast();
    this.clearCurrentStickerStay();
  }
  
  // Function to be called by the modal's "Proceed to next step" button
  proceedFromModal() {
    this.addInformationToArray(); // Add the information to the array
    this.toggleModal();
    this.proceedToNextStep();
    this.toggleToast();
    this.clearCurrentStickerNext();
  }

  clearCurrentStickerNext() {
    this.shared.isOil = '';
    this.shared.inputDateRadio = '';
    this.shared.inputNextDate = '';
    this.shared.inputNbrMonths = '';
  }

  clearCurrentStickerStay() {
    this.shared.inputDateRadio = '';
    this.shared.inputNextDate = '';
    this.shared.inputNbrMonths = '';
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.shared.currentStep--;
    }
  }
}
