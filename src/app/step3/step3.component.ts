import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  formGroup3!: FormGroup;

  currentLang: 'fr' | 'en' = 'fr';

  translations: any = {
    fr: {
      title: "Grade/type d'huile",
      intro: `Voulez-vous inscrire dans le haut de l'étiquette le grade/type d'huile utilisé? 
        Si vous choisissez cette option, lors de la confection d’une étiquette de changement d’huile, 
        l’imprimante vous posera la question suivante : GRADE D’HUILE? 
        Il vous sera possible d’inscrire le grade ou le type d’huile utilisé pour le changement d’huile de votre client. 
        Les textes générés dans l’image de droite sont des exemples.`,
      yesLabel: 'Oui',
      yesDescription: "Je souhaite inscrire le type/grade d'huile",
      noLabel: 'Non',
      noDescription: "Je ne souhaite pas inscrire le type/grade d'huile"
    },
    en: {
      title: "Oil grade/type",
      intro: `Would you like to display the oil grade/type at the top of the label? 
        If you choose this option, when creating an oil change label, the printer will ask: OIL GRADE? 
        You will be able to enter the oil grade or type used for your customer’s oil change. 
        The generated texts in the image on the right are examples.`,
      yesLabel: 'Yes',
      yesDescription: "I want to include the oil grade/type",
      noLabel: 'No',
      noDescription: "I do not want to include the oil grade/type"
    }
  };

  get t() {
    return this.translations[this.currentLang];
  }

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get isOil() {
    return this.shared.isOil;
  }

  ngOnInit() {
    this.currentLang = AppComponent.lang;
    
    this.formGroup3 = this.formBuilder.group({
      isOil: ['']
    });
  }

  updateIsOil(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.isOil = target.value;
    }
  }

}
