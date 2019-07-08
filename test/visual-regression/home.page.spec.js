import { assert } from 'chai';
import { homePage } from '../pages/home.page';
import { login } from '../pages/login.page';

describe('Visual regression tests on the home page.', () => {
  before(() => {
    login.open();
  });

  it('Displays logo on the home page.', function () {
    assert.equal(
      browser.checkElement(
        homePage.logoSite,
        this.test.title,
      ),
      0,
    );
  });

  it('Displays empty cart on the home page.', function () {
    assert.equal(
      browser.checkElement(
        homePage.cart,
        this.test.title,
      ),
      0,
    );
  });
});
