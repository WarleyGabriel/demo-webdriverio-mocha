import { deepStrictEqual } from 'assert';
import LoginPage from '../e2e/pages/Login.page';
import HomePage from '../e2e/pages/Home.page';

describe('Visual regression tests on the home page.', () => {
    before(() => {
        LoginPage.open();
    });

    it('Displays logo on the home page.', function () {
        deepStrictEqual(
            browser.checkElement(HomePage.logoSite, 'logo_on_the_home_page'),
            0,
        );
    });

    it('Displays empty cart on the home page.', function () {
        deepStrictEqual(
            browser.checkElement(HomePage.cart, 'empty_cart_on_the_home_page'),
            0,
        );
    });
});
