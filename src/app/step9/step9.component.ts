import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['./step9.component.css']
})
export class Step9Component implements OnInit {
  formGroup9!: FormGroup;

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get inputEntretien() {
    return this.shared.inputEntretien;
  }

  ngOnInit() {
    this.formGroup9 = this.formBuilder.group({
      inputEntretien: ['']
    });
  }

  updateEntretien(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.inputEntretien = target.value;
    }
  }
}
