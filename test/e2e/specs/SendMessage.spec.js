import { loginPage } from '../pages/Login.page';
import { contactPage } from '../pages/Contact.page';
import { contactValidation } from '../validations/Contact.validation';
import { context } from '../../data/Context';

describe('Send message to customer service.', () => {
    before(() => {
        loginPage.open();
        loginPage.login(context.logins.user);
    });

    it('Displays a message in heading page.', () => {
        contactPage.goToContactPage();
        contactValidation.checkLabelCustomerService();
    });

    it('Displays successfully after user sends message to customer service.', () => {
        const content = {
            subject: 2,
            message: 'My first test.',
            file: 'test.pdf',
        };
        contactPage.sendMessage(content);
        contactValidation.checkFeedbackMessageSent();
    });
});
