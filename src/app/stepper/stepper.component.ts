import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { MailgunService } from '../services/mailgun.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  // In your component.ts
  steps = new Array(11).fill(null).map((_, index) => index + 1);
  stepsWeb = new Array(5).fill(null).map((_, index) => index + 1);

  timeoutId: any = null;
  timeoutIdWarning: any = null;

  constructor(private formBuilder: FormBuilder, private shared: SharedService, private mailgun: MailgunService) {}

  get isWeb() {
    return this.shared.isWeb;
  }

  get stickerArray() {
    return this.shared.stickerArray;
  }

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

  get inputMessage() {
    return this.shared.inputMessage;
  }

  get inputEmail() {
    return this.shared.inputEmail;
  }

  get inputFirstname() {
    return this.shared.inputFirstname;
  }

  get inputTel() {
    return this.shared.inputTel;
  }

  get nomRep() {
    return this.shared.nomRep;
  }

  get emailRep() {
    return this.shared.emailRep;
  }

  get telRep() {
    return this.shared.telRep;
  }

  ngOnInit() {
  }

  calculateFontSize(text: string): number {
    const baseSize = 26; // Starting font size in pixels for up to 14 characters
    const maxLength = 15; // Start decreasing font size after this character count
    const decreaseFactor = 0.5; // Decrease font size by 0.5px for each character beyond maxLength

    if (text.length > maxLength) {
      const decreaseAmount = (text.length - maxLength) * decreaseFactor;
      return Math.max(baseSize - decreaseAmount, 10); // Ensure font size does not go below 10px
    }

    return baseSize; // Return base size if text length is within maxLength
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
    this.shared.stickerArray.push(sticker);
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
    if (this.currentStep === 6 && this.inputAntiRouille === 'true') {
      const isAlreadyInArray = this.shared.stickerArray.some(sticker => sticker.inputAntiRouille === 'true');
      if (isAlreadyInArray) {
      this.toggleWarningToast();
      } else {
      this.shared.stickerArray.push(stickerRouille);
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
    if (this.currentStep === 7 && this.inputLight === 'true') {
      const isAlreadyInArray = this.shared.stickerArray.some(sticker => sticker.inputLight === 'true' //&& sticker.inputLightDate === this.inputLightDate && sticker.inputLightMonth === this.inputLightMonth
      );
      if (isAlreadyInArray) {
      this.toggleWarningToast();
      } else {
      this.shared.stickerArray.push(stickerLight);
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
    if (this.currentStep === 8 && this.inputRetorq === 'true') {
      const isAlreadyInArray = this.shared.stickerArray.some(sticker => sticker.inputRetorq === 'true' 
      );
      if (isAlreadyInArray) {
      this.toggleWarningToast();
      } else {
      this.shared.stickerArray.push(stickerRetorq);
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
    if (this.currentStep === 9 && this.inputCustom === 'true') {
      const isAlreadyInArray = this.shared.stickerArray.some(sticker => sticker.inputCustom === 'true'
      );
      if (isAlreadyInArray) {
      this.toggleWarningToast();
      } else {
      this.shared.stickerArray.push(stickerCustom);
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
    if (this.currentStep === 10 && this.inputEntretien === 'true') {
      const isAlreadyInArray = this.shared.stickerArray.some(sticker => sticker.inputEntretien === 'true'
      );
      if (isAlreadyInArray) {
      this.toggleWarningToast();
      } else {
      this.shared.stickerArray.push(stickerEntretien);
      this.toggleToast();
      }
    }
  }

  deleteItem(index: number): void {
    this.shared.stickerArray.splice(index, 1);
  }
  
  removeRouilleItem() {
    if (this.inputAntiRouille === 'false') {
      const index = this.shared.stickerArray.findIndex(sticker => sticker.inputAntiRouille === 'true');
      if (index !== -1) {
        this.shared.stickerArray.splice(index, 1);
      }
    }
  }

  removeLightItem() {
    if (this.inputLight === 'false') {
      const index = this.shared.stickerArray.findIndex(sticker => sticker.inputLight === 'true');
      if (index !== -1) {
        this.shared.stickerArray.splice(index, 1);
      }
    }
  }

  removeRetorqItem() {
    if (this.inputRetorq === 'false') {
      const index = this.shared.stickerArray.findIndex(sticker => sticker.inputRetorq === 'true');
      if (index !== -1) {
        this.shared.stickerArray.splice(index, 1);
      }
    }
  }

  removeCustomItem() {
    if (this.inputCustom === 'false') {
      const index = this.shared.stickerArray.findIndex(sticker => sticker.inputCustom === 'true');
      if (index !== -1) {
        this.shared.stickerArray.splice(index, 1);
      }
    }
  }

  removeEntretienItem() {
    if (this.inputEntretien === 'false') {
      const index = this.shared.stickerArray.findIndex(sticker => sticker.inputEntretien === 'true');
      if (index !== -1) {
        this.shared.stickerArray.splice(index, 1);
      }
    }
  }

  nextStep() {
    // This function should return true if all required inputs are filled, false otherwise.
    const areRequiredInputsFilled = this.checkRequiredInputs();
  
    if (!areRequiredInputsFilled) {
      // Prompt the user to fill out the missing fields.
      // This could be a simple alert or a more sophisticated modal/dialog with detailed information.
      this.toggleDangerToast();
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

  submitForm() {
    const areRequiredInputsFilled = this.checkRequiredInputs();
  
    if (!areRequiredInputsFilled) {
      this.toggleDangerToast();
      return; // Exit the function to prevent proceeding to the next step.
    }

    this.mailgun.sendEmail().subscribe({
      next: (response) => this.toggleToastSubmited(),
      error: (error) => console.error('Error sending email', error)
    });
  }
  
  checkRequiredInputs() {
    switch (this.currentStep) {
      case 2:
        return this.inputSelect;
      case 3:
        if (this.nbrLines === 'lines-2') {
          return this.inputText && this.telText; // addressText not required.
        } else {
          return this.inputText && this.telText && this.addressText; // addressText required.
        }
      case 4:
        return this.isOil;
      case 5:
        if (this.inputDateRadio === 'isDateNext') {
          if (this.inputNextDate === 'auto') {
            return this.inputNextDate && this.inputNbrMonths;
          }
          return this.inputNextDate;
        } else {
          return true;
        }
      case 6:
        return this.inputAntiRouille;
      case 7:
        if (this.inputLight === 'true') {
          if (this.inputLightDate === 'true') {
            return this.inputLightDate && this.inputLightMonth;
          }
          return this.inputLightDate;
        } else {
          return this.inputLight;
        }
      case 8:
        return this.inputRetorq;
      case 9:
        return this.inputCustom;
      case 10:
        return this.inputEntretien;
      case 11:
        if(!this.shared.showRep) {
          return this.inputEmail && this.inputFirstname && this.inputTel && this.nomRep && this.emailRep && this.telRep;
        } else {
          return this.inputEmail && this.inputFirstname && this.inputTel;
        }
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
    // Clear existing timeout if there is one
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      // Ensure the toast is visible before setting a new timeout
      document.getElementById('toast-success')?.classList.remove('hidden');
    } else {
      // If the toast is not already shown, show it
      document.getElementById('toast-success')?.classList.toggle('hidden');
    }
  
    // Set a new timeout to hide the toast after a duration
    this.timeoutId = setTimeout(() => {
      document.getElementById('toast-success')?.classList.add('hidden');
      // Reset the timeoutId when the toast is hidden
      this.timeoutId = null;
    }, 3000); // Duration in milliseconds, adjust as needed
  }

  toggleToastSubmited() {
    // Clear existing timeout if there is one
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      // Ensure the toast is visible before setting a new timeout
      document.getElementById('toast-submited')?.classList.remove('hidden');
    } else {
      // If the toast is not already shown, show it
      document.getElementById('toast-submited')?.classList.toggle('hidden');
    }
  
    // Set a new timeout to hide the toast after a duration
    this.timeoutId = setTimeout(() => {
      document.getElementById('toast-submited')?.classList.add('hidden');
      // Reset the timeoutId when the toast is hidden
      this.timeoutId = null;
    }, 3000); // Duration in milliseconds, adjust as needed
  }

  toggleWarningToast() {
    const toastWarning = document.getElementById('toast-warning');
    // Clear existing timeout if there is one
    if (this.timeoutIdWarning) {
      clearTimeout(this.timeoutIdWarning);
      // Ensure the toast is visible before setting a new timeout
      toastWarning?.classList.remove('hidden');
    } else {
      // If the toast is not already shown, show it
      toastWarning?.classList.toggle('hidden');
    }
  
    // Set a new timeout to hide the toast after a duration
    this.timeoutIdWarning = setTimeout(() => {
      toastWarning?.classList.add('hidden');
      // Reset the timeoutId when the toast is hidden
      this.timeoutIdWarning = null;
    }, 3000); // Duration in milliseconds, adjust as needed
  }

  toggleDangerToast() {
    const toastDanger = document.getElementById('toast-danger');
    // Clear existing timeout if there is one
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      // Ensure the toast is visible before setting a new timeout
      toastDanger?.classList.remove('hidden');
    } else {
      // If the toast is not already shown, show it
      toastDanger?.classList.toggle('hidden');
    }
  
    // Set a new timeout to hide the toast after a duration
    this.timeoutId = setTimeout(() => {
      toastDanger?.classList.add('hidden');
      // Reset the timeoutId when the toast is hidden
      this.timeoutId = null;
    }, 3000); // Duration in milliseconds, adjust as needed
  }

  closeWarningToast() {
    const toastWarning = document.getElementById('toast-warning');
    // Clear the timeout if there is one
    if (this.timeoutIdWarning) {
      clearTimeout(this.timeoutIdWarning);
    }

    // Hide the toast
    toastWarning?.classList.add('hidden');
  }

  closeToast() {
    // Clear the timeout if there is one
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    // Hide the toast
    document.getElementById('toast-success')?.classList.add('hidden');
  }

  closeToastSubmited() {
    // Clear the timeout if there is one
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    // Hide the toast
    document.getElementById('toast-submited')?.classList.add('hidden');
  }


  closeDangerToast() {
    const toastDanger = document.getElementById('toast-danger');
    // Clear the timeout if there is one
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    // Hide the toast
    toastDanger?.classList.add('hidden');
  }
  
  // function to decide when to open the modal
  shouldOpenModal(): boolean {
    // For example, open the modal only on a specific step
    if (
      this.currentStep === 5 &&
      !this.inputDateRadio &&
      !this.inputNextDate &&
      !this.inputNbrMonths
    ) {
      this.clearCurrentStickerNext();
      return false;
    } else {
      let autoCount = 0;
      for (const sticker of this.shared.stickerArray) {
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
      // Check if trying to add another 'auto' when the count is already 2 or more
      if (autoCount >= 2 && this.inputNextDate === 'auto') {
        this.toggleWarningToast();
        this.clearCurrentStickerNext();
        return false;
      }
    }
    // If none of the conditions to restrict adding more inputs are met, allow opening the modal
    return this.currentStep === 5;
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
