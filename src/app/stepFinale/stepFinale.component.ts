import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-stepFinale',
  templateUrl: './stepFinale.component.html',
  styleUrls: ['./stepFinale.component.css']
})
export class StepFinaleComponent implements OnInit {
  formGroupFinale!: FormGroup;

  showTooltipVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get inputMessage() {
    return this.shared.inputMessage;
  }

  get inputEmail() {
    return this.shared.inputEmail;
  }

  get inputFirstname() {
    return this.shared.inputFirstname;
  }

  get selectedImageUrl() {
    return this.shared.selectedImageUrl;
  }

  ngOnInit() {
    this.formGroupFinale = this.formBuilder.group({
      inputEmail: [''],
      inputFirstname: [''],
      inputMessage: ['']
    });
  }

  updateFinaleForm() {
    this.shared.inputEmail = this.formGroupFinale.get('inputEmail')?.value;
    this.shared.inputFirstname = this.formGroupFinale.get('inputFirstname')?.value;
    this.shared.inputMessage = this.formGroupFinale.get('inputMessage')?.value;
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.shared.selectedImageUrl = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    this.shared.selectedImageUrl = '';

    const fileInput: HTMLInputElement = document.getElementById(
      'dropzone-file'
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Clear the file input
    }
  }

  showTooltip() {
    this.showTooltipVisible = true;
  }
  
  hideTooltip() {
    this.showTooltipVisible = false;
  }
}
