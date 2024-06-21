import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css']
})
export class Step6Component implements OnInit {
  formGroup6!: FormGroup;

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get inputLight() {
    return this.shared.inputLight;
  }

  get inputLightDate() {
    return this.shared.inputLightDate;
  }

  get inputLightMonth() {
    return this.shared.inputLightMonth;
  }

  ngOnInit() {
    this.formGroup6 = this.formBuilder.group({
      inputLight : [''],
      inputLightDate : [''],
      inputLightMonth : ['']
    });
  }

  updateInputLight(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.inputLight = target.value;
    }
  }

  updateInputLightDate(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.inputLightDate = target.value;
    }
  }

  updateInputLightMonth() {
    this.shared.inputLightMonth = this.formGroup6.get('inputLightMonth')?.value;
  }
}
