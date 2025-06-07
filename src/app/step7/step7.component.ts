import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.css']
})
export class Step7Component implements OnInit {
  formGroup7!: FormGroup;

  currentLang: 'fr' | 'en' = 'fr';

  translations: any = {
    fr: {
      title: "Formulaire de rappel de serrage des roues",
      options: {
        yes: "Oui",
        no: "Non",
        addForm: "Je souhaite ajouter un formulaire de rappel de serrage de roues.",
        noForm: "Je ne souhaite pas ajouter un formulaire de rappel de serrage de roues."
      }
    },
    en: {
      title: "Wheel Tightening Reminder Form",
      options: {
        yes: "Yes",
        no: "No",
        addForm: "I want to add a wheel tightening reminder form.",
        noForm: "I do not want to add a wheel tightening reminder form."
      }
    }
  };

  get t() {
    return this.translations[this.currentLang];
  }

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get inputRetorq() {
    return this.shared.inputRetorq;
  }

  ngOnInit() {
    this.currentLang = AppComponent.lang;
    
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
