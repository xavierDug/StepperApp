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
}
