import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { MailgunService } from '../services/mailgun.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stepFinale',
  templateUrl: './stepFinale.component.html',
  styleUrls: ['./stepFinale.component.css']
})
export class StepFinaleComponent implements OnInit {
  formGroupFinale!: FormGroup;

  showTooltipVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, private shared: SharedService, private mailgun: MailgunService, private route: ActivatedRoute) { }

  get showRep() {
    return this.shared.showRep;
  }

  get inputMessage() {
    return this.shared.inputMessage;
  }

  get inputEmail() {
    return this.shared.inputEmail;
  }

  get inputFirstname() {
    return this.shared.inputFirstname;
  }

  get selectedImageUrl() {
    return this.shared.selectedImageUrl;
  }

  get inputTel() {
    return this.shared.inputTel;
  }

  get nomRep() {
    return this.shared.nomRep;
  }

  get emailRep() {
    return this.shared.emailRep;
  }

  get telRep() {
    return this.shared.telRep;
  }

  ngOnInit() {
    this.formGroupFinale = this.formBuilder.group({
      inputEmail: [''],
      inputFirstname: [''],
      inputMessage: [''],
      inputTel: [''],
      nomRep: [''],
      emailRep: [''],
      telRep: [''],
    });

    this.route.url.subscribe(url => {
      // Check if the current route is '/april'
      const isAprilRoute = url.toString().includes('april');
      const isValvolineRoute = url.toString().includes('valvoline');
      const isCastrolRoute = url.toString().includes('castrol');
      if (isAprilRoute || isValvolineRoute || isCastrolRoute) {
        // Hide the select and set the inputSelect value
        this.shared.showRep = false;
      }
    });
  }

  updateFinaleForm() {
    this.shared.inputEmail = this.formGroupFinale.get('inputEmail')?.value;
    this.shared.inputFirstname = this.formGroupFinale.get('inputFirstname')?.value;
    this.shared.inputMessage = this.formGroupFinale.get('inputMessage')?.value;
    this.shared.inputTel = this.formGroupFinale.get('inputTel')?.value;
    this.shared.nomRep = this.formGroupFinale.get('nomRep')?.value;
    this.shared.emailRep = this.formGroupFinale.get('emailRep')?.value;
    this.shared.telRep = this.formGroupFinale.get('telRep')?.value;
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.shared.selectedImageUrl = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    this.shared.selectedImageUrl = '';

    const fileInput: HTMLInputElement = document.getElementById(
      'dropzone-file'
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Clear the file input
    }
  }

  showTooltip() {
    this.showTooltipVisible = true;
  }
  
  hideTooltip() {
    this.showTooltipVisible = false;
  }

  
}
