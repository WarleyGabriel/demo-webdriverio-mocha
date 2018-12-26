import { assert } from 'chai';

class Login {
  open() {
    browser.url('/');
  }

  get inputEmail() {
    return $('body #inputEmail');
  }

  get inputPassword() {
    return $('body #inputPassword');
  }

  get buttonLogin() {
    return $('body #login');
  }

  get welcomeMessage() {
    return $('h1');
  }

  doLogin(user) {
    this.inputEmail.setValue(user.login);
    this.inputPassword.setValue(user.password);
    this.buttonLogin.click();

    browser.waitForExist(this.welcomeMessage.selector);
    assert.include(this.welcomeMessage.getText(), 'Welcome Back');
    assert.include(browser.element('.header-lined h1').getText(), user.name);
  }
}

export const login = new Login();
