import { SystemMessages } from '../constants/SystemMessages';
import { SystemLabels } from '../constants/SystemLabels';
import LoginPage from '../pages/Login.page';
import ContactPage from '../pages/Contact.page';
import login from '../../data/Login.json';

describe('Send message to customer service.', () => {
    before(() => {
        LoginPage.open();
        LoginPage.login(login.user.login, login.user.password);
    });

    it('Displays a message in heading page.', () => {
        ContactPage.goToContactPage();

        expect(ContactPage.heading).toHaveText(SystemLabels.CUSTOMER_SERVICE);
    });

    it('Displays successfully after user sends message to customer service.', () => {
        ContactPage.sendMessage({
            subject: '2',
            message: 'My first test.',
            file: 'file.pdf',
        });

        expect(ContactPage.successMessage).toHaveText(
            SystemMessages.FEEDBACK_MESSAGE_SENT,
        );

        // This sleep is unnecessary for the test, it's only to see the result (on-screen)
        browser.pause(5000);
    });
});
