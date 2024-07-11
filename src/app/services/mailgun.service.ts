import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from './shared.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MailgunService {
  private apiUrl = 'https://ochgenerator.azurewebsites.net/api/email';
  showContent: boolean = false;

  constructor(private http: HttpClient, private shared: SharedService, private route: ActivatedRoute) {}

  get stickerArray() {
    return this.shared.stickerArray;
  }

  prepareEmailContent(): string {
    let emailContent = `
    <div style="font-family: Arial, sans-serif;">
      <div style="display: block; text-align: center; align-content: center; background-color: #0473bb; padding: 20px;">
  
            <img src="https://ochplanner3.blob.core.windows.net/sticker-generator/cropped-ochplanner-logo-gros-blanc-1.png" style="width: 200px; display: block; margin: auto;">

          </div>
          <div style="color: white; background-color:#3c83b3;  padding:20px; text-align: center;">
            <h1 style="margin-top:0px;">New Sticker generator request</h1>
                <p><strong>Name:</strong> ${this.shared.inputFirstname}</p>
                <p><strong>Email:</strong> ${this.shared.inputEmail}</p>
                <p><strong>Phone:</strong> ${this.shared.inputTel}</p>
                <p><strong>Message:</strong> ${this.shared.inputMessage}</p>
                <hr>
                ${this.shared.showRep! ? `<p><strong>Nom du REPRÉSENTANT:</strong> ${this.shared.nomRep}</p>` : ''}
                ${this.shared.showRep! ? `<p><strong>Courriel du REPRÉSENTANT:</strong> ${this.shared.emailRep}</p>` : ''}
                ${this.shared.showRep! ? `<p><strong>Téléphone du REPRÉSENTANT:</strong> ${this.shared.telRep}</p>` : ''}
          </div>
          <div style="padding:20px;">
            <h1>Sticker choisit:</h1>
            <img src="https://ochplanner3.blob.core.windows.net/sticker-generator/${this.shared.inputSelect}.png" style="height: 200px; display: block; margin: auto;">
            <h2>Info client:</h2>
            <p><strong>Nombre de lignes:</strong> ${this.shared.nbrLines}</p>
            <p><strong>Nom du garage:</strong> ${this.shared.inputText}</p>
            <p><strong>Téléphone:</strong> ${this.shared.telText}</p>
            ${this.shared.addressText ? `<p><strong>Adresse:</strong> ${this.shared.addressText}</p>` : ''}
            <hr>
            <h2>Grade d'huile et dates:</h2>
            ${this.shared.isOil === "true" ? `<p><strong>Grade/Type d'huile:</strong> Inclus</p>` : ''}
  `;

    this.stickerArray.forEach((item) => {
      if (item.inputSelect) {
        emailContent += `
          
            ${item.inputDateRadio === "isDateNow" ? `<p><strong>Date inscrite sur l’étiquette:</strong> DATE de L’ENTRETIEN</p>` : ''}
            ${item.inputNextDate === "manual" ? `<p><strong>Date inscrite sur l’étiquette:</strong> Prochaine date manuel</p>` : ''}
            ${item.inputNextDate === "auto" ? `<p><strong>Date inscrite sur l’étiquette:</strong> Prochaine date automatique au ${item.inputNbrMonths} mois</p>` : ''}
            ${item.inputDateRadio === "isNoDate" ? `<p><strong>Date inscrite sur l’étiquette:</strong> Pas de date</p>` : ''}
            
        `;
      }
    });

    emailContent += `
      <hr>
            <h2>Formulaire inclus:</h2>
            ${
              this.shared.inputAntiRouille === "true" || 
              this.shared.inputLight === "true" || 
              this.shared.inputRetorq === "true" || 
              this.shared.inputCustom === "true" || 
              this.shared.inputEntretien === "true"
              ? 
              `${this.shared.inputAntiRouille === "true" ? `<p><strong>Formulaire Anti-rouille:</strong> Inclus</p>` : ''}
               ${this.shared.inputLight === "true" && this.shared.inputLightDate === "false" ? `<p><strong>Formulaire rappel d’entretien pas de date:</strong> Inclus</p>` : ''}
               ${this.shared.inputLight === "true" && this.shared.inputLightDate === "true" ? `<p><strong>Formulaire rappel d’entretien avec date:</strong> Inclus (au ${this.shared.inputLightMonth} mois)</p>` : ''}
               ${this.shared.inputRetorq === "true" ? `<p><strong>Formulaire de rappel de serrage des roues:</strong> Inclus</p>` : ''}
               ${this.shared.inputCustom === "true" ? `<p><strong>Formulaire de message personnalisé:</strong> Inclus</p>` : ''}
               ${this.shared.inputEntretien === "true" ? `<p><strong>Formulaire pour les entretiens effectués:</strong> Inclus</p>` : ''}`
              : 'Aucun'
          }
          </div>
    </div>
    `;
    return emailContent;
  }

  sendEmail() {
    const emailContent = this.prepareEmailContent();

    const formData = new FormData();
    formData.append('to', 'xavierdugal2004@hotmail.com');
    formData.append('subject', 'Sticker Generator');
    formData.append('body', emailContent);

    if (this.shared.selectedImageUrl) {
      const blob = this.dataURItoBlob(this.shared.selectedImageUrl as string);
      formData.append('attachment', blob, 'uploaded-image.png');
    }

    return this.http.post(`${this.apiUrl}/send`, formData);
  }

  private dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }
}
