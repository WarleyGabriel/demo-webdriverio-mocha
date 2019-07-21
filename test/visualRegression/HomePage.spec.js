import { assert } from 'chai';
import { homePage } from '../e2e/pages/Home.page';
import { loginPage } from '../e2e/pages/Login.page';

describe('Visual regression tests on the home page.', () => {
    before(() => {
        loginPage.open();
    });

    it('Displays logo on the home page.', function() {
        assert.equal(
            browser.checkElement(homePage.logoSite, this.test.title),
            0,
        );
    });

    it('Displays empty cart on the home page.', function() {
        assert.equal(browser.checkElement(homePage.cart, this.test.title), 0);
    });
});
