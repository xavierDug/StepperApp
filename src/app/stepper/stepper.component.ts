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

  get inputLight() {
    return this.shared.inputLight;
  }

  get inputLightDate() {
    return this.shared.inputLightDate;
  }

  get inputLightMonth() {
    return this.shared.inputLightMonth;
  }

  get inputRetorq() {
    return this.shared.inputRetorq;
  }

  get inputCustom() {
    return this.shared.inputCustom;
  }

  get inputEntretien() {
    return this.shared.inputEntretien;
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

  addRouilleInformationToArray() {
    const stickerRouille = {
      selectedImageUrl: this.selectedImageUrl,
      inputSelect: this.inputSelect,
      inputText: this.inputText,
      nbrLines: this.nbrLines,
      telText: this.telText,
      addressText: this.addressText,
      inputAntiRouille: this.inputAntiRouille,
    };
    if (this.currentStep === 5 && this.inputAntiRouille === 'true') {
      const isAlreadyInArray = this.stickerArray.some(sticker => sticker.inputAntiRouille === 'true');
      if (isAlreadyInArray) {
      this.toggleWarningToast();
      } else {
      this.stickerArray.push(stickerRouille);
      this.toggleToast();
      }
    }
  }

  addLightInformationToArray() {
    const stickerLight = {
      selectedImageUrl: this.selectedImageUrl,
      inputSelect: this.inputSelect,
      inputText: this.inputText,
      nbrLines: this.nbrLines,
      telText: this.telText,
      addressText: this.addressText,
      inputLight: this.inputLight,
      inputLightDate: this.inputLightDate,
      inputLightMonth: this.inputLightMonth,
    };
    if (this.currentStep === 6 && this.inputLight === 'true') {
      const isAlreadyInArray = this.stickerArray.some(sticker => sticker.inputLight === 'true' //&& sticker.inputLightDate === this.inputLightDate && sticker.inputLightMonth === this.inputLightMonth
      );
      if (isAlreadyInArray) {
      this.toggleWarningToast();
      } else {
      this.stickerArray.push(stickerLight);
      this.toggleToast();
      }
    }
  }

  addRetorqInformationToArray() {
    const stickerRetorq = {
      selectedImageUrl: this.selectedImageUrl,
      inputSelect: this.inputSelect,
      inputText: this.inputText,
      nbrLines: this.nbrLines,
      telText: this.telText,
      addressText: this.addressText,
      inputRetorq: this.inputRetorq
    };
    if (this.currentStep === 7 && this.inputRetorq === 'true') {
      const isAlreadyInArray = this.stickerArray.some(sticker => sticker.inputRetorq === 'true' 
      );
      if (isAlreadyInArray) {
      this.toggleWarningToast();
      } else {
      this.stickerArray.push(stickerRetorq);
      this.toggleToast();
      }
    }
  }

  addCustomInformationToArray() {
    const stickerCustom = {
      selectedImageUrl: this.selectedImageUrl,
      inputSelect: this.inputSelect,
      inputText: this.inputText,
      nbrLines: this.nbrLines,
      telText: this.telText,
      addressText: this.addressText,
      inputCustom: this.inputCustom
    };
    if (this.currentStep === 8 && this.inputCustom === 'true') {
      const isAlreadyInArray = this.stickerArray.some(sticker => sticker.inputCustom === 'true'
      );
      if (isAlreadyInArray) {
      this.toggleWarningToast();
      } else {
      this.stickerArray.push(stickerCustom);
      this.toggleToast();
      }
    }
  }

  addEntretienInformationToArray() {
    const stickerEntretien = {
      selectedImageUrl: this.selectedImageUrl,
      inputSelect: this.inputSelect,
      inputText: this.inputText,
      nbrLines: this.nbrLines,
      telText: this.telText,
      addressText: this.addressText,
      inputEntretien: this.inputEntretien
    };
    if (this.currentStep === 9 && this.inputEntretien === 'true') {
      const isAlreadyInArray = this.stickerArray.some(sticker => sticker.inputEntretien === 'true'
      );
      if (isAlreadyInArray) {
      this.toggleWarningToast();
      } else {
      this.stickerArray.push(stickerEntretien);
      this.toggleToast();
      }
    }
  }

  deleteItem(index: number): void {
    this.stickerArray.splice(index, 1);
  }
  
  removeRouilleItem() {
    if (this.inputAntiRouille === 'false') {
      const index = this.stickerArray.findIndex(sticker => sticker.inputAntiRouille === 'true');
      if (index !== -1) {
        this.stickerArray.splice(index, 1);
      }
    }
  }

  removeLightItem() {
    if (this.inputLight === 'false') {
      const index = this.stickerArray.findIndex(sticker => sticker.inputLight === 'true');
      if (index !== -1) {
        this.stickerArray.splice(index, 1);
      }
    }
  }

  removeRetorqItem() {
    if (this.inputRetorq === 'false') {
      const index = this.stickerArray.findIndex(sticker => sticker.inputRetorq === 'true');
      if (index !== -1) {
        this.stickerArray.splice(index, 1);
      }
    }
  }

  removeCustomItem() {
    if (this.inputCustom === 'false') {
      const index = this.stickerArray.findIndex(sticker => sticker.inputCustom === 'true');
      if (index !== -1) {
        this.stickerArray.splice(index, 1);
      }
    }
  }

  removeEntretienItem() {
    if (this.inputEntretien === 'false') {
      const index = this.stickerArray.findIndex(sticker => sticker.inputEntretien === 'true');
      if (index !== -1) {
        this.stickerArray.splice(index, 1);
      }
    }
  }

  nextStep() {
    // This function should return true if all required inputs are filled, false otherwise.
    const areRequiredInputsFilled = this.checkRequiredInputs();
  
    if (!areRequiredInputsFilled) {
      // Prompt the user to fill out the missing fields.
      // This could be a simple alert or a more sophisticated modal/dialog with detailed information.
      alert('Please fill out all required fields before proceeding to the next step.');
      return; // Exit the function to prevent proceeding to the next step.
    }
  
    // Condition to open the modal instead of going to the next step directly
    if (this.shouldOpenModal()) {
      this.toggleModal();
    } else {
      this.addRouilleInformationToArray();
      this.addLightInformationToArray();
      this.addRetorqInformationToArray();
      this.addCustomInformationToArray();
      this.addEntretienInformationToArray();
      this.removeRouilleItem();
      this.removeLightItem();
      this.removeRetorqItem();
      this.removeCustomItem();
      this.removeEntretienItem();
      this.proceedToNextStep();
    }
  }
  
  checkRequiredInputs() {
    switch (this.currentStep) {
      case 1:
        return this.inputSelect;
      case 2:
        if (this.nbrLines === 'lines-2') {
          return this.inputText && this.telText; // addressText not required.
        } else {
          return this.inputText && this.telText && this.addressText; // addressText required.
        }
      case 3:
        return this.isOil;
      case 4:
        if (this.inputDateRadio === 'isDateNext') {
          if (this.inputNextDate === 'auto') {
            return this.inputNextDate && this.inputNbrMonths;
          }
          return this.inputNextDate;
        } else {
          return this.inputDateRadio;
        }
      case 5:
        return this.inputAntiRouille;
      case 6:
        if (this.inputLight === 'true') {
          if (this.inputLightDate === 'true') {
            return this.inputLightDate && this.inputLightMonth;
          }
          return this.inputLightDate;
        } else {
          return this.inputLight;
        }
      case 7:
        return this.inputRetorq;
      case 8:
        return this.inputCustom;
      case 9:
        return this.inputEntretien;
      default:
        return true;
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
  
  // function to decide when to open the modal
  shouldOpenModal(): boolean {
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
