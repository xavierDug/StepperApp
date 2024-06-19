import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css']
})
export class Step5Component implements OnInit {
  formGroup5!: FormGroup;

  constructor(private formBuilder: FormBuilder, private shared: SharedService) { }

  get inputAntiRouille() {
    return this.shared.inputAntiRouille;
  }

  ngOnInit() {
    this.formGroup5 = this.formBuilder.group({
      inputAntiRouille : []
    });
  }

  updateAntiRouille(event: Event) {
    // Cast the event target to an HTMLInputElement
    const target = event.target as HTMLInputElement;
    // Now you can safely access the value property
    if (target && target.value) {
      this.shared.inputAntiRouille = target.value;
    }
  }

}
