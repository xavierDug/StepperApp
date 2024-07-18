import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-ystep',
  templateUrl: './ystep.component.html',
  styleUrls: ['./ystep.component.css']
})
export class YstepComponent implements OnInit {
  formGroupY!: FormGroup;

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get isWeb() {
    return this.shared.isWeb;
  }

  get currentSteps() {
    return this.shared.currentSteps;
  }

  ngOnInit() {
    this.formGroupY = this.formBuilder.group({
      isWeb: ['']
    });
  }

  updateIsWeb(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.isWeb = target.value;
    }
  }
}
