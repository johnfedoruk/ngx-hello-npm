import { browser, element, by } from 'protractor';

export class NgxHelloNpmPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root hello')).getText();
  }
}
