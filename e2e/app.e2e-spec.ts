import { NgxHelloNpmPage } from './app.po';

describe('ngx-hello-npm App', () => {
  let page: NgxHelloNpmPage;

  beforeEach(() => {
    page = new NgxHelloNpmPage();
  });

  it(`should display message saying 'Hello, NPM!'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello, NPM!');
  });
});
