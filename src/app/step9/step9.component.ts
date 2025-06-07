import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['./step9.component.css']
})
export class Step9Component implements OnInit {
  formGroup9!: FormGroup;

  currentLang: 'fr' | 'en' = 'fr';

  translations: any = {
    fr: {
      step9: {
        title: "Formulaire pour les entretiens effectués",
        intro: `Ce formulaire vous permet d’inscrire un entretien effectué afin de laisser
        une trace pour vos techniciens ou vos clients. Lors du remplacement d’une
        courroie d’entrainement par exemple ou un filtre à cabine, il vous sera
        possible de mettre cette étiquette dans le coffre à gants ou en dessous du
        capot afin d’économiser du temps lors des futurs entretiens.`,
        options: {
          yes: "Oui",
          no: "Non",
          addForm: "Je souhaite ajouter un formulaire de l'entretien effectué.",
          noForm: "Je ne souhaite pas ajouter un formulaire de l'entretien effectué."
        }
      }
    },
    en: {
      step9: {
        title: "Performed Maintenance Form",
        intro: `This form lets you record a completed maintenance service so that your technicians or clients have a record. For example, after replacing a drive belt or a cabin filter, you can place this tag in the glove box or under the hood to save time during future maintenance.`,
        options: {
          yes: "Yes",
          no: "No",
          addForm: "I want to add a performed maintenance form.",
          noForm: "I do not want to add a performed maintenance form."
        }
      }
    }
  };

  get t() {
    return this.translations[this.currentLang];
  }  

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get inputEntretien() {
    return this.shared.inputEntretien;
  }

  ngOnInit() {
    this.currentLang = AppComponent.lang;
    
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
