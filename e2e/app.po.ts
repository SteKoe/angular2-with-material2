export class BcTypeaheadPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bc-typeahead-app h1')).getText();
  }
}
