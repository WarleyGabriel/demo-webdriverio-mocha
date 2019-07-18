import { assert } from 'chai';
import { home } from '../e2e/pages/Home.page';
import { login } from '../e2e/pages/Login.page';

describe('Visual regression tests on the home page.', () => {
    before(() => {
        login.open();
    });

    it('Displays logo on the home page.', function() {
        assert.equal(browser.checkElement(home.logoSite, this.test.title), 0);
    });

    it('Displays empty cart on the home page.', function() {
        assert.equal(browser.checkElement(home.cart, this.test.title), 0);
    });
});
