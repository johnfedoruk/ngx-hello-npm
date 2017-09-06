import { Ng4HelloNpmPage } from './app.po';

describe('ng4-hello-npm App', () => {
  let page: Ng4HelloNpmPage;

  beforeEach(() => {
    page = new Ng4HelloNpmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
