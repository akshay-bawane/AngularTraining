import { Component, computed, inject, input, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { type InvestmentOutput } from '../investment-output.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  private investmentService = inject(InvestmentService);

  //results = input<InvestmentOutput[]>();

  // get results() {
  //   return this.investmentService.resultsData;
  // }

  ////using computed value
  //results = computed(() => this.investmentService.resultsData());

  results = this.investmentService.resultsData.asReadonly();

}
