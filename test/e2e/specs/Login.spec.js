import { assert } from 'chai';
import { login } from '../pages/Login.page';
import { context } from '../../data/Context';
import * as systemMessages from '../constants/SystemMessages.constant';

describe('Authentication page.', () => {
    before(() => {
        login.open();
    });

    it('Displays login message successfully.', () => {
        login.login(context.logins.user);

        assert.equal(
            login.welcomeMessage.getText(),
            systemMessages.FEEDBACK_USER_LOGGED,
        );
    });

    it('Displays user name on the page.', () => {
        assert.equal(login.userLoggedIn.getText(), context.logins.user.name);
    });
});
