import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component implements OnInit {
  formGroup1!: FormGroup;

  showTooltipVisible: boolean = false;

  showSelect: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private shared: SharedService,
    private route: ActivatedRoute
  ) {}

  get currentStep() {
    return this.shared.currentStep;
  }

  get selectedImageUrl() {
    return this.shared.selectedImageUrl;
  }

  get isWeb() {
    return this.shared.isWeb;
  }

  ngOnInit() {
    this.formGroup1 = this.formBuilder.group({
      inputSelect: [this.shared.inputSelect || ''],
    });

    this.route.url.subscribe(url => {
      // Check if the current route is '/april'
      const isAprilRoute = url.toString().includes('april');
      const isValvolineRoute = url.toString().includes('testvalv');
      const isCastrolRoute = url.toString().includes('castrol');
      if (isAprilRoute) {
        // Hide the select and set the inputSelect value
        this.showSelect = false;
        this.shared.inputSelect = 'april-324x324';
      } if (isValvolineRoute) {
        // Hide the select and set the inputSelect value
        this.showSelect = false;
        this.shared.inputSelect = 'Valvoline';
      } if (isCastrolRoute) {
        // Hide the select and set the inputSelect value
        this.showSelect = false;
        this.shared.inputSelect = 'castrol-V2';
      }
    });
  }

  updateSelectTemplate(): void {
    this.shared.inputSelect = this.formGroup1.get('inputSelect')?.value;
  }
}
