import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  stickerArray: any[] = [];
  currentSteps: number[] = [];
  currentStep = 1;

  //Y branch
  isWeb: string = '';

  // this is the sticker template
  inputSelect: string = '';
  // this is the image url
  selectedImageUrl: string | ArrayBuffer | null | undefined = null;

  //step 2
  inputText: string = '';
  nbrLines: string = '';
  telText: string = '';
  addressText: string = '';

  //step 3
  isOil: string = '';

  //step 4
  inputDateRadio: string = '';
  inputNextDate: string = '';
  inputNbrMonths: string = '';

  //step 5
  inputAntiRouille: string = '';

  //step 6
  inputLight: string = '';
  inputLightDate: string = '';
  inputLightMonth: string = '';

  //step 7
  inputRetorq: string = '';

  //step 8
  inputCustom: string = '';

  //step 9
  inputEntretien: string = '';

  //step finale
  inputMessage: string = '';
  inputEmail: string = '';
  inputFirstname: string = '';
  inputTel: string = '';

  nomRep: string = '';
  emailRep: string = '';
  telRep: string = '';


  showRep: boolean = true;

  constructor() {}
  
}
