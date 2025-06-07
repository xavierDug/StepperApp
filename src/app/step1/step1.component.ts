import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component implements OnInit {
  formGroup1!: FormGroup;

  showTooltipVisible: boolean = false;

  showSelect: boolean = true;

  currentLang: 'fr' | 'en' = 'fr';

  translations: any = {
    fr: {
      titleWithSelect: "Choix du modèle d'étiquettes",
      titleWithoutSelect: "Modèle d'étiquettes",
      introText: `Bienvenue dans notre générateur d’étiquettes pour le système Autonome de
        OCH Planner. Ces quelques questions vont nous permettre de créer les
        différents modèles d’étiquettes qui seront incluses dans l’imprimante. Il
        vous sera possible de passer d’un modèle à l’autre très facilement. Tout
        au long de ce formulaire, vous pourrez voir la liste des épreuves dans le
        bas de votre écran. Nous vous enverrons par courriel , avant l’expédition,
        une photo des épreuves incluses.`,
      selectLabel: "Choisir une option",
      selectPlaceholder: "Choisissez un modèle d'étiquettes",
      white: "Blanc",
      generic: "Générique"
    },
    en: {
      titleWithSelect: "Choose your label model",
      titleWithoutSelect: "Label model",
      introText: `Welcome to our label generator for OCH Planner’s Autonomous system.
        These few questions will help us generate the different label templates that will be included in the printer.
        You will be able to switch between templates easily. Throughout this form, you can see a list of previews at the bottom of your screen.
        Before shipping, we will send you a photo of the included previews by email.`,
      selectLabel: "Choose an option",
      selectPlaceholder: "Choose a label model",
      white: "White",
      generic: "Generic"
    }
  };

  get t() {
    return this.translations[this.currentLang];
  }
  
  constructor(
    private formBuilder: FormBuilder,
    private shared: SharedService,
    private route: ActivatedRoute
  ) {}

  get currentStep() {
    return this.shared.currentStep;
  }

  get selectedImageUrl() {
    return this.shared.selectedImageUrl;
  }

  get isWeb() {
    return this.shared.isWeb;
  }

  ngOnInit() {
    this.formGroup1 = this.formBuilder.group({
      inputSelect: [this.shared.inputSelect || ''],
    });

    this.currentLang = AppComponent.lang;

    this.route.url.subscribe(url => {
      // Check if the current route is '/april'
      const isAprilRoute = url.toString().includes('april');
      const isValvolineRoute = url.toString().includes('testvalv');
      const isCastrolRoute = url.toString().includes('castrol');
      if (isAprilRoute) {
        // Hide the select and set the inputSelect value
        this.showSelect = false;
        this.shared.inputSelect = 'april-324x324';
      } if (isValvolineRoute) {
        // Hide the select and set the inputSelect value
        this.showSelect = false;
        this.shared.inputSelect = 'Valvoline';
      } if (isCastrolRoute) {
        // Hide the select and set the inputSelect value
        this.showSelect = false;
        this.shared.inputSelect = 'castrol-V2';
      }
    });
  }

  updateSelectTemplate(): void {
    this.shared.inputSelect = this.formGroup1.get('inputSelect')?.value;
  }
}
