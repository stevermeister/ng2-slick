import { Ng2SlickPage } from './app.po';

describe('ng2-slick App', function() {
  let page: Ng2SlickPage;

  beforeEach(() => {
    page = new Ng2SlickPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
