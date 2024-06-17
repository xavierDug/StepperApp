import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  formGroup2!: FormGroup;

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get inputText() {
    return this.shared.inputText;
  }

  get nbrLines() {
    return this.shared.nbrLines;
  }

  get telText() {
    return this.shared.telText;
  }

  get addressText() {
    return this.shared.addressText;
  }

  ngOnInit() {
    this.formGroup2 = this.formBuilder.group({
      inputText: [this.shared.inputText || ''],
      nbrLines: [''],
      telText: [ this.shared.telText || ''],
      addressText: [ this.shared.addressText || '']
    });
  }

  updateNbrLines(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.nbrLines = target.value;
    }
  }

  updateText(): void {
    this.shared.inputText = this.formGroup2.get('inputText')?.value;
    this.shared.telText = this.formGroup2.get('telText')?.value;
    this.shared.addressText = this.formGroup2.get('addressText')?.value;
  }

}
