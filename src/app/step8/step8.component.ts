import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css']
})
export class Step8Component implements OnInit {
  formGroup8!: FormGroup;

  currentLang: 'fr' | 'en' = 'fr';

  translations: any = {
    fr: {
      title: "Formulaire de message personnalisé",
      intro: "Voulez vous un formulaire qui permet d'écrire un message personnalisé à votre client?",
      options: {
        yes: "Oui",
        no: "Non",
        addForm: "Je souhaite ajouter un formulaire de message personnalisé.",
        noForm: "Je ne souhaite pas ajouter un formulaire de message personnalisé."
      }
    },
    en: {
      title: "Custom Message Form",
      intro: "Would you like a form that allows you to write a personalized message to your client?",
      options: {
        yes: "Yes",
        no: "No",
        addForm: "I want to add a custom message form.",
        noForm: "I do not want to add a custom message form."
      }
    }
  };

  get t() {
    return this.translations[this.currentLang];
  }

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get inputCustom() {
    return this.shared.inputCustom;
  }

  ngOnInit() {
    this.currentLang = AppComponent.lang;

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
