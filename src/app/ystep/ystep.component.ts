import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-ystep',
  templateUrl: './ystep.component.html',
  styleUrls: ['./ystep.component.css']
})
export class YstepComponent implements OnInit {
  formGroupY!: FormGroup;

  currentLang: 'fr' | 'en' = 'fr';


  translations: any = {
    fr: {
      systemChoiceTitle: 'Choix du système',
      systemChoiceIntro: 'Vous avez l\'option d\'utiliser le système OCH Planner de 2 façons:',
      option1Text: `1. Le système OCH Planner Autonome. Si vous n'avez pas d'ordinateurs ou d'accès internet à votre atelier, cette option est pour vous! Un clavier résistant branché dans l'imprimante OCH Planner équipée d'un petit écran LCD permet de faire rapidement les étiquettes de rappel d'entretien. La vidéo suivante vous permet de voir le fonctionnement de ce système.`,
      option2Text: `2. Le Système OCH Planner WEB. Avec ce système, l'imprimante sera branchée dans un ordinateur ou partagée sur votre réseau et vous utiliserez une application simple et rapide pour faire les étiquettes de rappel d'entretien. La vidéo suivante vous montre les détails du fonctionnement de cette option.`,
      chooseStandalone: 'CHOISIR MODE AUTONOME',
      chooseWeb: 'CHOISIR APPLICATION WEB',
    },
    en: {
      systemChoiceTitle: 'System Selection',
      systemChoiceIntro: 'You can use the OCH Planner system in two ways:',
      option1Text: `1. OCH Planner Standalone System. If you don’t have computers or internet access in your shop, this option is for you! A rugged keyboard connected to the OCH Planner printer with a small LCD screen allows you to quickly create maintenance reminder labels. The following video shows how this system works.`,
      option2Text: `2. OCH Planner WEB System. With this system, the printer is connected to a computer or shared on your network and you use a simple, fast web application to create maintenance reminder labels. The video below shows the details of how this option works.`,
      chooseStandalone: 'CHOOSE STANDALONE MODE',
      chooseWeb: 'CHOOSE WEB APPLICATION',
    }
  };

  get t() {
    return this.translations[this.currentLang];
  }

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get isWeb() {
    return this.shared.isWeb;
  }

  get currentSteps() {
    return this.shared.currentSteps;
  }

  ngOnInit() {
    this.currentLang = AppComponent.lang;
    this.formGroupY = this.formBuilder.group({
      isWeb: ['']
    });
  }

  updateIsWeb(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.isWeb = target.value;
      this.shared.currentStep++;
    }
  }
}
