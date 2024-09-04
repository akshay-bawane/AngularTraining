import { Component, signal } from '@angular/core';

import { type InvestmentOutput } from './investment-output.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  resultsData = signal<InvestmentOutput[] | undefined>(undefined);

  
}
