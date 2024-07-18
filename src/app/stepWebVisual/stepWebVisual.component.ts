import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-stepWebVisual',
  templateUrl: './stepWebVisual.component.html',
  styleUrls: ['./stepWebVisual.component.css']
})
export class StepWebVisualComponent implements OnInit {

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
  }


  calculateFontSize(text: string): number {
    const baseSize = 26; // Starting font size in pixels for up to 14 characters
    const maxLength = 15; // Start decreasing font size after this character count
    const decreaseFactor = 0.5; // Decrease font size by 0.5px for each character beyond maxLength

    if (text.length > maxLength) {
      const decreaseAmount = (text.length - maxLength) * decreaseFactor;
      return Math.max(baseSize - decreaseAmount, 10); // Ensure font size does not go below 10px
    }

    return baseSize; // Return base size if text length is within maxLength
  }
}
