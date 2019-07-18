import { assert } from 'chai';
import { login } from '../pages/Login.page';
import { contact } from '../pages/Contact.page';
import { context } from '../../data/Context';
import * as systemMessages from '../constants/SystemMessages.constant';
import * as systemLabels from '../constants/SystemLabels.constant';

describe('Send message to customer service.', () => {
    before(() => {
        login.open();
        login.login(context.logins.user);
    });

    it('Displays a message in heading page.', () => {
        contact.goToContactPage();
        assert.equal(contact.heading.getText(), systemLabels.CUSTOMER_SERVICE);
    });

    it('Displays successfully after user sends message to customer service.', () => {
        const content = {
            subject: 2,
            message: 'My first test.',
            file: 'test.pdf',
        };

        contact.sendMessage(content);

        assert.equal(
            contact.successMessage.getText(),
            systemMessages.FEEDBACK_MESSAGE_SENT,
        );
    });
});
