import { Angular2Proj1Page } from './app.po';

describe('angular2-proj1 App', function() {
  let page: Angular2Proj1Page;

  beforeEach(() => {
    page = new Angular2Proj1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
