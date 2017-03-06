import { Ang2toDoAppPage } from './app.po';

describe('ang2to-do-app App', function() {
  let page: Ang2toDoAppPage;

  beforeEach(() => {
    page = new Ang2toDoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
