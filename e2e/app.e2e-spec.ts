import { Www.ShiponairPage } from './app.po';

describe('www.shiponair App', () => {
  let page: Www.ShiponairPage;

  beforeEach(() => {
    page = new Www.ShiponairPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
