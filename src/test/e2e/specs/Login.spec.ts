import { SystemMessages } from '../constants/SystemMessages';
import LoginPage from '../pages/Login.page';
import login from '../../data/Login.json';

describe('Authentication page.', () => {
    before(() => {
        LoginPage.open();
    });

    it('Displays login message successfully.', () => {
        LoginPage.login(login.user.login, login.user.password);

        expect(LoginPage.welcomeMessage).toHaveText(
            SystemMessages.FEEDBACK_USER_LOGGED,
        );
    });

    it('Displays user name on the page.', () => {
        expect(LoginPage.userLoggedIn).toHaveText(login.user.name);
    });
});
