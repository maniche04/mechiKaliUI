import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  areas = [
    {
      'icon': 'domain',
      'title': 'HOME.PRACTICE_AREAS.COMPANY_INCORPORATION',
      'description': 'HOME.PRACTICE_AREAS.COMPANY_INCORPORATION_DESC'
    },
    {
      'icon': 'people',
      'title': 'HOME.PRACTICE_AREAS.SECRETARIAL_SERVICES',
      'description': 'HOME.PRACTICE_AREAS.SECRETARIAL_SERVICES_DESC'
    },
    {
      'icon': 'pan_tool',
      'title': 'HOME.PRACTICE_AREAS.NON_PROFIT',
      'description': 'HOME.PRACTICE_AREAS.NON_PROFIT_DESC'
    },
    {
      'icon': 'euro_symbol',
      'title': 'HOME.PRACTICE_AREAS.FOREIGN_INVESTMENT',
      'description': 'HOME.PRACTICE_AREAS.FOREIGN_INVESTMENT_DESC'
    },
    {
      'icon': 'gavel',
      'title': 'HOME.PRACTICE_AREAS.LITIGATION_DISPUTES',
      'description': 'HOME.PRACTICE_AREAS.LITIGATION_DISPUTES_DESC'
    },
    {
      'icon': 'file_copy',
      'title': 'HOME.PRACTICE_AREAS.CONTRACTS',
      'description': 'HOME.PRACTICE_AREAS.CONTRACTS_DESC'
    },
    {
      'icon': 'texture',
      'title': 'HOME.PRACTICE_AREAS.INTELLECTUAL_PROPERTY',
      'description': 'HOME.PRACTICE_AREAS.INTELLECTUAL_PROPERTY_DESC'
    },
    {
      'icon': 'group',
      'title': 'HOME.PRACTICE_AREAS.LABOUR_EMPLOYMENT',
      'description': 'HOME.PRACTICE_AREAS.LABOUR_EMPLOYMENT_DESC'
    },
    {
      'icon': 'device_hub',
      'title': 'HOME.PRACTICE_AREAS.MERGERS',
      'description': 'HOME.PRACTICE_AREAS.MERGERS_DESC'
    },
    {
      'icon': 'local_atm',
      'title': 'HOME.PRACTICE_AREAS.CORPORATE_TAX',
      'description': 'HOME.PRACTICE_AREAS.CORPORATE_TAX_DESC'
    }
  ];

  constructor(public translate: TranslateService, public api: APIService) {
  }

  ngOnInit() {
  }

}
