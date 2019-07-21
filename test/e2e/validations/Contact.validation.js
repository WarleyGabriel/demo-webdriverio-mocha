import { assert } from 'chai';
import { contactPage } from '../pages/Contact.page';
import * as systemMessages from '../constants/SystemMessages.constant';
import * as systemLabels from '../constants/SystemLabels.constant';

class ContactValidation {
    checkLabelCustomerService() {
        assert.equal(
            contactPage.heading.getText(),
            systemLabels.CUSTOMER_SERVICE,
        );
    }

    checkFeedbackMessageSent() {
        assert.equal(
            contactPage.successMessage.getText(),
            systemMessages.FEEDBACK_MESSAGE_SENT,
        );
    }
}

export const contactValidation = new ContactValidation();
