import { OvertimeNgPage } from './app.po';

describe('overtime-ng App', () => {
  let page: OvertimeNgPage;

  beforeEach(() => {
    page = new OvertimeNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
