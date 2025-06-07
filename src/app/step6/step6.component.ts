import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css']
})
export class Step6Component implements OnInit {
  formGroup6!: FormGroup;

  currentLang: 'fr' | 'en' = 'fr';

  translations: any = {
    fr: {
      title: "Formulaire rappel d’entretien",
      intro: "Voulez-vous inclure un formulaire qui indique au client de passer quand la lumière de rappel d’entretien allume?",
      options: {
        yes: "Oui",
        no: "Non",
        addForm: "Je souhaite ajouter un formulaire de rappel d'entretien.",
        noForm: "Je ne souhaite pas ajouter un formulaire de rappel d'entretien."
      },
      dateQuestion: "Voulez-vous mettre une date?",
      monthsLabel: "Veuillez inscrire le nombre de mois"
    },
    en: {
      title: "Maintenance Reminder Form",
      intro: "Would you like to include a form that tells the client to come in when the maintenance reminder light turns on?",
      options: {
        yes: "Yes",
        no: "No",
        addForm: "I want to add a maintenance reminder form.",
        noForm: "I do not want to add a maintenance reminder form."
      },
      dateQuestion: "Do you want to set a date?",
      monthsLabel: "Please enter the number of months"
    }
  };

  get t() {
    return this.translations[this.currentLang];
  }

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
    this.currentLang = AppComponent.lang;
    
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
