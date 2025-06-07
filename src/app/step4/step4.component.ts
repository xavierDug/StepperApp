import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {
  formGroup4!: FormGroup;

  currentLang: 'fr' | 'en' = 'fr';  // set this from AppComponent or your service

  translations: any = {
    fr: {
      title: "Date inscrite sur l’étiquette",
      intro: `Sur les étiquettes, afin d’éviter toute confusion, il est possible
             d’inscrire et d’identifier le type de date que vous désirez inscrire. Si
             vous choisissez DATE de L’ENTRETIEN, vous n’aurez rien à inscrire car
             l’imprimante est équipée d’une horloge interne qui lui permet de la
             calculer automatiquement. Il vous sera possible de créer plus qu’un type
             de formulaires pour cette étape.`,
      dateOptions: {
        isDateNow: "DATE de L’ENTRETIEN",
        isDateNext: "PROCHAINE DATE",
        isNoDate: "PAS DE DATE"
      },
      nextDateOptions: {
        manual: "Date manuelle",
        auto: "Date du jour + XX mois"
      },
      manualDateText: `Voulez-vous inscrire cette date manuellement? Si oui, vous pourrez
        l’inscrire dans le format que vous désirez. Il est aussi possible que
        l’imprimante calcule automatiquement la date du jour le nombre de mois
        désirés. Il vous sera possible de créer plus qu’un type de formulaire
        pour cette étape par exemple pour avoir 2 formulaires, un avec 3 mois et
        un avec 6 mois.`,
      monthsLabel: "Veuillez inscrire le nombre de mois",
      exampleNote: "*Les textes générés sont des exemples"
    },
    en: {
      title: "Date displayed on the label",
      intro: `On the labels, to avoid any confusion, it is possible
             to write and identify the type of date you want to display. If
             you choose SERVICE DATE, you will not need to enter anything because
             the printer is equipped with an internal clock that automatically
             calculates it. You will be able to create more than one type
             of form for this step.`,
      dateOptions: {
        isDateNow: "SERVICE DATE",
        isDateNext: "NEXT DATE",
        isNoDate: "NO DATE"
      },
      nextDateOptions: {
        manual: "Manual date",
        auto: "Current date + XX months"
      },
      manualDateText: `Do you want to enter this date manually? If yes, you can
        enter it in the format you want. It is also possible that
        the printer automatically calculates the date of the day plus the number
        of desired months. You will be able to create more than one type of form
        for this step, for example, to have 2 forms, one with 3 months and one with 6 months.`,
      monthsLabel: "Please enter the number of months",
      exampleNote: "*The generated texts are examples"
    }
  };  

  get t() {
    return this.translations[this.currentLang];
  }

  constructor(private formBuilder: FormBuilder, public shared: SharedService) { }

  get inputDateRadio() {
    return this.shared.inputDateRadio;
  }

  get inputNextDate() {
    return this.shared.inputNextDate;
  }

  get inputNbrMonths() {
    return this.shared.inputNbrMonths;
  }

  ngOnInit() {
    this.currentLang = AppComponent.lang;
    
    this.formGroup4 = this.formBuilder.group({
      inputDateRadio: [''],
      inputNextDate: [''],
      inputNbrMonths: [this.shared.inputNbrMonths || '']
    });
  }

  updateMonths(): void {
    this.shared.inputNbrMonths = this.formGroup4.get('inputNbrMonths')?.value;
  }

  toggleDropdown() {
    document.getElementById('dropdownBgHover')?.classList.toggle('hidden');
  }

  updateDateRadio(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.inputDateRadio = target.value;

      if(this.inputDateRadio !== 'isDateNext'){
        this.shared.inputNextDate = '';
      }
    }
  }

  updateNextDate(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.inputNextDate = target.value;
    }
  }
}
