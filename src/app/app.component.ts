import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StepperApp';
  static lang: 'fr' | 'en' = 'fr'; // default

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam === 'en' || langParam === 'fr') {
      AppComponent.lang = langParam;
    }
  }
}
