import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-stepFinale',
  templateUrl: './stepFinale.component.html',
  styleUrls: ['./stepFinale.component.css']
})
export class StepFinaleComponent implements OnInit {
  formGroupFinale!: FormGroup;

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get inputMessage() {
    return this.shared.inputMessage;
  }

  get inputEmail() {
    return this.shared.inputEmail;
  }

  get inputFirstname() {
    return this.shared.inputFirstname;
  }

  ngOnInit() {
    this.formGroupFinale = this.formBuilder.group({
      inputEmail: [''],
      inputFirstname: [''],
      inputMessage: ['']
    });
  }

  updateFinaleForm() {
    this.shared.inputEmail = this.formGroupFinale.get('inputEmail')?.value;
    this.shared.inputFirstname = this.formGroupFinale.get('inputFirstname')?.value;
    this.shared.inputMessage = this.formGroupFinale.get('inputMessage')?.value;
  }
}
