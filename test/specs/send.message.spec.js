import { login } from '../pages/login.page';
import { contact } from '../pages/contact.page';
import { context } from '../data/context';

describe('Send message to customer service.', () => {
  before(() => {
    login.open();
    login.login(context.logins.user);
  });

  it('Displays successfully after user sends message to customer service.', () => {
    const content = {
      subject: 2,
      message: 'My first test.',
      file: 'test.zip',
    };

    contact.sendMessage(content);
  });
});
