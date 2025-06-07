import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css']
})
export class Step5Component implements OnInit {
  formGroup5!: FormGroup;

  currentLang: 'fr' | 'en' = 'fr';  // set this from AppComponent or your service

  translations: any = {
    fr: {
      title: "Formulaire antirouille",
      question: "Offrez vous le service d'antirouille?",
      options: {
        yes: {
          title: "Oui",
          description: "Je souhaite ajouter un formulaire d'antirouille."
        },
        no: {
          title: "Non",
          description: "Je ne souhaite pas ajouter un formulaire d'antirouille."
        }
      }
    },
    en: {
      title: "Rustproofing Form",
      question: "Do you offer rustproofing service?",
      options: {
        yes: {
          title: "Yes",
          description: "I want to add a rustproofing form."
        },
        no: {
          title: "No",
          description: "I do not want to add a rustproofing form."
        }
      }
    }
  };

  get t() {
    return this.translations[this.currentLang];
  }

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get inputAntiRouille() {
    return this.shared.inputAntiRouille;
  }

  ngOnInit() {
    this.currentLang = AppComponent.lang;
    
    this.formGroup5 = this.formBuilder.group({
      inputAntiRouille : [ this.shared.inputAntiRouille]
    });
  }

  updateAntiRouille(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.inputAntiRouille = target.value;
    }
  }

}
