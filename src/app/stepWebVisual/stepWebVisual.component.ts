import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-stepWebVisual',
  templateUrl: './stepWebVisual.component.html',
  styleUrls: ['./stepWebVisual.component.css']
})
export class StepWebVisualComponent implements OnInit {

  language: 'fr' | 'en' = 'fr';

  translations: any = {
    fr: {
      templatesTitle: 'Templates',
      templatesDescription: `Grâce au système OCH Planner WEB, vous pouvez sélectionner avant chaque impression le format de date utilisé, l'utilisation d'un grade d'huile ou non et des messages personnalisés. Tous les formats suivants de recommandations, d'entretiens effectués, d'étiquettes d'identification de clé ou de rappels de rendez-vous sont inclus dans l'application et il vous est possible d'en ajouter selon vos besoins. Le technicien qui fera votre installation originale vous montrera comment utiliser l'application.`,
      dateFormatsIncluded: 'Plusieurs formats de date sont inclus dans l\'application',
      customModelsIntro: 'Et plusieurs différents modèles sont aussi inclus. Vous pouvez créer les vôtres',
      stickerTypes: [
        'ENTRETIENS EFFECTUÉS',
        'PROCHAIN RDV',
        'RECOMMANDATIONS',
        'TAG DE CLÉS'
      ]
    },
    en: {
      templatesTitle: 'Templates',
      templatesDescription: `Thanks to the OCH Planner WEB system, you can select the date format, oil grade usage, and custom messages before each print. All the following formats—recommendations, completed services, key tag labels, and appointment reminders—are included in the application, and you can add more as needed. The technician performing the original installation will show you how to use the app.`,
      dateFormatsIncluded: 'Several date formats are included in the application',
      customModelsIntro: 'And many different templates are also included. You can create your own',
      stickerTypes: [
        'COMPLETED SERVICES',
        'NEXT APPOINTMENT',
        'RECOMMENDATIONS',
        'KEY TAG'
      ]
    }
  };

  get t() {
    return this.translations[this.language];
  }  

  constructor(public shared: SharedService) { }

  get webStickerArray() {
    return this.shared.webStickerArray;
  }

  get isWeb() {
    return this.shared.isWeb;
  }

  get inputText() {
    return this.shared.inputText;
  }

  ngOnInit() {
    this.language = AppComponent.lang;
  }


  calculateFontSize(text: string): number {
    const baseSize = 20; // Starting font size in pixels for up to 14 characters
    const maxLength = 15; // Start decreasing font size after this character count
    const decreaseFactor = 0.5; // Decrease font size by 0.5px for each character beyond maxLength

    if (text.length > maxLength) {
      const decreaseAmount = (text.length - maxLength) * decreaseFactor;
      return Math.max(baseSize - decreaseAmount, 10); // Ensure font size does not go below 10px
    }

    return baseSize; // Return base size if text length is within maxLength
  }
}
