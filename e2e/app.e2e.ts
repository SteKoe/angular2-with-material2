import { BcTypeaheadPage } from './app.po';

describe('bc-typeahead App', function() {
  let page: BcTypeaheadPage;

  beforeEach(() => {
    page = new BcTypeaheadPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bc-typeahead works!');
  });
});
