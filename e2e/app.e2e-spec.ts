import { FirtsProject1Page } from './app.po';

describe('firts-project1 App', () => {
  let page: FirtsProject1Page;

  beforeEach(() => {
    page = new FirtsProject1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
