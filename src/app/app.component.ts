import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mechi Kali';

  constructor(public translate: TranslateService, private api: APIService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
    api.fetchArticles();
    api.getArticles();
  }

  changeLang(event) {
    this.translate.use(event.value);
  }
}
