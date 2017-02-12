import { RouteBasicsNg2Page } from './app.po';

describe('route-basics-ng2 App', function() {
  let page: RouteBasicsNg2Page;

  beforeEach(() => {
    page = new RouteBasicsNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
