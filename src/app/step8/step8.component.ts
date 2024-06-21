import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css']
})
export class Step8Component implements OnInit {
  formGroup8!: FormGroup;

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get inputCustom() {
    return this.shared.inputCustom;
  }

  ngOnInit() {
    this.formGroup8 = this.formBuilder.group({
      inputCustom: ['']
    });
  }

  updateCustom(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.inputCustom = target.value;
    }
  }
}
