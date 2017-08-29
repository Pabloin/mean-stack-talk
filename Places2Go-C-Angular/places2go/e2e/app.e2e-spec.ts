import { Places2goPage } from './app.po';

describe('places2go App', () => {
  let page: Places2goPage;

  beforeEach(() => {
    page = new Places2goPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
