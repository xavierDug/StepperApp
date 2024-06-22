import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component implements OnInit {
  formGroup1!: FormGroup;

  showTooltipVisible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private shared: SharedService
  ) {}

  get currentStep() {
    return this.shared.currentStep;
  }

  get selectedImageUrl() {
    return this.shared.selectedImageUrl;
  }

  ngOnInit() {
    this.formGroup1 = this.formBuilder.group({
      inputSelect: [this.shared.inputSelect || ''],
    });
  }

  updateSelectTemplate(): void {
    this.shared.inputSelect = this.formGroup1.get('inputSelect')?.value;
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
}
