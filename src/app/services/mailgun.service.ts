import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class MailgunService {
  private apiUrl = 'https://localhost:7076/api/email';

  constructor(private http: HttpClient, private shared: SharedService) {}

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
               ${this.shared.inputLight === "true" ? `<p><strong>Formulaire rappel d’entretien:</strong> Inclus</p>` : ''}
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

    const emailRequest = {
      to: 'xavierdugal2004@hotmail.com',
      subject: 'Sticker Generator',
      body: emailContent,
    };

    return this.http.post(`${this.apiUrl}/send`, emailRequest);
  }
}
