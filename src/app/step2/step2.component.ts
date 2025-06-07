import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  formGroup2!: FormGroup;

  currentLang: 'fr' | 'en' = 'fr';

  translations: any = {
    fr: {
      title: 'Personnalisation de votre étiquette',
      line2Label: '2 lignes',
      line2Desc: 'Nom et téléphone seulement',
      line3Label: '3 lignes',
      line3Desc: 'Nom, adresse et téléphone',
      nameLabel: 'Nom',
      addressLabel: 'Adresse',
      phoneLabel: 'Téléphone',
      logoNote: `Il vous sera possible à la fin de ce formulaire d’inclure le logo de votre entreprise qui pourra être ajouté dans le haut de votre étiquette.`
    },
    en: {
      title: 'Customize your label',
      line2Label: '2 lines',
      line2Desc: 'Name and phone only',
      line3Label: '3 lines',
      line3Desc: 'Name, address, and phone',
      nameLabel: 'Name',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      logoNote: `At the end of this form, you'll have the option to include your business logo, which can be added to the top of your label.`
    }
  };

  get t() {
    return this.translations[this.currentLang];
  }

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

    this.currentLang = AppComponent.lang;
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
