import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {
  formGroup4!: FormGroup;

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get inputDateRadio() {
    return this.shared.inputDateRadio;
  }

  get inputNextDate() {
    return this.shared.inputNextDate;
  }

  get inputNbrMonths() {
    return this.shared.inputNbrMonths;
  }

  ngOnInit() {
    this.formGroup4 = this.formBuilder.group({
      inputDateRadio: [''],
      inputNextDate: [''],
      inputNbrMonths: [this.shared.inputNbrMonths || '']
    });
  }

  updateMonths(): void {
    this.shared.inputNbrMonths = this.formGroup4.get('inputNbrMonths')?.value;
  }

  updateDateRadio(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.inputDateRadio = target.value;

      if(this.inputDateRadio !== 'isDateNext'){
        this.shared.inputNextDate = '';
      }
    }
  }

  updateNextDate(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.inputNextDate = target.value;
    }
  }
}
