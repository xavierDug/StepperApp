import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.css']
})
export class Step7Component implements OnInit {
  formGroup7!: FormGroup;

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get inputRetorq() {
    return this.shared.inputRetorq;
  }

  ngOnInit() {
    this.formGroup7 = this.formBuilder.group({
      inputRetorq: ['']
    });
  }

  updateRetorq(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.inputRetorq = target.value;
    }
  }

}
