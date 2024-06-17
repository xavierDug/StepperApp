import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  currentStep = 1;
  // this is the sticker template
  inputSelect: string = '';
  // this is the image url
  selectedImageUrl: string | ArrayBuffer | null | undefined = null;

  inputText: string = '';
  nbrLines: string = '';
  telText: string = '';
  addressText: string = '';

  isOil: string = '';

  inputDateRadio: string = '';
  inputNextDate: string = '';
  inputNbrMonths: string = '';

  constructor() {}
  
}
