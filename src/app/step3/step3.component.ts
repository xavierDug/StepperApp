import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  formGroup3!: FormGroup;

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get isOil() {
    return this.shared.isOil;
  }

  ngOnInit() {
    this.formGroup3 = this.formBuilder.group({
      isOil: ['']
    });
  }

  updateIsOil(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.isOil = target.value;
    }
  }

}
