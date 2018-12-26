import { login } from '../pages/login.page';
import { register } from '../pages/register.page';
import { context } from '../data/context';

describe('Register contact.', () => {
  before(() => {
    login.open();
    login.doLogin(context.logins.user);
  });

  it('Displays successfully registered contact.', () => {
    register.registerContact(context.contacts.contact);
  });
});
