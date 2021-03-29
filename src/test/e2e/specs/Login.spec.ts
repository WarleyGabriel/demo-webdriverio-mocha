import { performancetotal } from 'wdio-performancetotal-service';
import { SystemMessages } from '../constants/SystemMessages';
import LoginPage from '../pages/Login.page';
import login from '../../data/Login.json';

describe('Authentication page.', () => {
    before(() => {
        LoginPage.open();
    });

    it('Displays login message successfully.', () => {
        performancetotal.sampleStart('LoginProcess');

        LoginPage.login(login.user.login, login.user.password);

        expect(LoginPage.welcomeMessage).toHaveText(
            SystemMessages.FEEDBACK_USER_LOGGED,
        );

        performancetotal.sampleEnd('LoginProcess');
    });

    it('Displays user name on the page.', () => {
        expect(LoginPage.userLoggedIn).toHaveText(login.user.name);
    });
});
