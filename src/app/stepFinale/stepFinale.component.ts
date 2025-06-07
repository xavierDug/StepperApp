import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { MailgunService } from '../services/mailgun.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-stepFinale',
  templateUrl: './stepFinale.component.html',
  styleUrls: ['./stepFinale.component.css']
})
export class StepFinaleComponent implements OnInit {
  formGroupFinale!: FormGroup;

  currentLang: 'fr' | 'en' = 'fr';

  translations: any = {
    fr: {
      finale: {
        title: "Comment vous rejoindre?",
        intro: "Si vous avez des besoins particuliers ou demandes spéciales, veuillez nous en faire part:",
        placeholderMessage: "Veuillez nous en faire part ici",
        emailLabel: "Courriel de l'atelier",
        telLabel: "No de téléphone",
        nameLabel: "Nom de la personne à contacter",
        emailPlaceholder: "exemple@gmail.com",
        namePlaceholder: "Prénom Nom",
        repName: "Nom du REPRÉSENTANT",
        repEmail: "Courriel du REPRÉSENTANT",
        repTel: "Téléphone du REPRÉSENTANT",
        logoLabel: "Logo (optionnel)",
        dropText: "Cliquez pour soumettre votre logo ou faites un glisser-déposer",
        uploadedText: "Logo envoyé avec succès",
        formatNote: "SVG, PNG, JPG",
        removeTooltip: "Retirer le logo.",
        footer: `Avec les informations que vous nous avez transmises, nous allons créer les
        épreuves pour étiquettes demandées et vous retourner une photo pour
        approbation par courriel. Un de nos représentants vous contactera dans 24 à
        48 heures. Vérifier occasionnellement votre boîte courriel et aussi votre
        boîte pourriel.`,
        required: "(Requis)"
      }
    },
    en: {
      finale: {
        title: "How can we reach you?",
        intro: "If you have specific needs or special requests, please let us know:",
        placeholderMessage: "Please let us know here",
        emailLabel: "Workshop email",
        telLabel: "Phone number",
        nameLabel: "Contact person's name",
        emailPlaceholder: "example@gmail.com",
        namePlaceholder: "First Last",
        repName: "REPRESENTATIVE'S name",
        repEmail: "REPRESENTATIVE'S email",
        repTel: "REPRESENTATIVE'S phone",
        logoLabel: "Logo (optional)",
        dropText: "Click to upload your logo or drag and drop",
        uploadedText: "Logo uploaded successfully",
        formatNote: "SVG, PNG, JPG",
        removeTooltip: "Remove logo.",
        footer: `With the information you provided, we will create the requested label mockups and send you a photo for approval via email. One of our representatives will contact you within 24 to 48 hours. Please check your inbox and spam folder periodically.`,
        required: "(Required)"
      }
    }
  };

  get t() {
    return this.translations[this.currentLang];
  }

  showTooltipVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, private shared: SharedService, private mailgun: MailgunService, private route: ActivatedRoute) { }

  get showRep() {
    return this.shared.showRep;
  }

  get inputMessage() {
    return this.shared.inputMessage;
  }

  get inputEmail() {
    return this.shared.inputEmail;
  }

  get inputFirstname() {
    return this.shared.inputFirstname;
  }

  get selectedImageUrl() {
    return this.shared.selectedImageUrl;
  }

  get inputTel() {
    return this.shared.inputTel;
  }

  get nomRep() {
    return this.shared.nomRep;
  }

  get emailRep() {
    return this.shared.emailRep;
  }

  get telRep() {
    return this.shared.telRep;
  }

  ngOnInit() {
    this.currentLang = AppComponent.lang;
    
    this.formGroupFinale = this.formBuilder.group({
      inputEmail: [''],
      inputFirstname: [''],
      inputMessage: [''],
      inputTel: [''],
      nomRep: [''],
      emailRep: [''],
      telRep: [''],
    });

    this.route.url.subscribe(url => {
      // Check if the current route is '/april'
      const isAprilRoute = url.toString().includes('april');
      const isValvolineRoute = url.toString().includes('testvalv');
      const isCastrolRoute = url.toString().includes('castrol');
      if (isAprilRoute || isValvolineRoute || isCastrolRoute) {
        // Hide the select and set the inputSelect value
        this.shared.showRep = false;
      }
    });
  }

  updateFinaleForm() {
    this.shared.inputEmail = this.formGroupFinale.get('inputEmail')?.value;
    this.shared.inputFirstname = this.formGroupFinale.get('inputFirstname')?.value;
    this.shared.inputMessage = this.formGroupFinale.get('inputMessage')?.value;
    this.shared.inputTel = this.formGroupFinale.get('inputTel')?.value;
    this.shared.nomRep = this.formGroupFinale.get('nomRep')?.value;
    this.shared.emailRep = this.formGroupFinale.get('emailRep')?.value;
    this.shared.telRep = this.formGroupFinale.get('telRep')?.value;
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.shared.selectedImageUrl = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    this.shared.selectedImageUrl = '';

    const fileInput: HTMLInputElement = document.getElementById(
      'dropzone-file'
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Clear the file input
    }
  }

  showTooltip() {
    this.showTooltipVisible = true;
  }
  
  hideTooltip() {
    this.showTooltipVisible = false;
  }

  
}
