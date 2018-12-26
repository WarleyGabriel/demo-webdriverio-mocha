import { login } from '../pages/login.page';
import { context } from '../data/context';

describe('Authentication page.', () => {
  before(() => {
    login.open();
  });

  it('Displays login message successfully.', () => {
    login.doLogin(context.logins.user);
  });
});
