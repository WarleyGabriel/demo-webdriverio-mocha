import { assert } from 'chai';
import { loginPage } from '../pages/Login.page';
import * as systemMessages from '../constants/SystemMessages.constant';

class LoginValidation {
    checkUserLoggedMessage() {
        assert.equal(
            loginPage.welcomeMessage.getText(),
            systemMessages.FEEDBACK_USER_LOGGED,
        );
    }

    checkUserName(userName) {
        assert.equal(loginPage.userLoggedIn.getText(), userName);
    }
}

export const loginValidation = new LoginValidation();
