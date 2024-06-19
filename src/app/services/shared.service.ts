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

  constructor() {}
  
}
