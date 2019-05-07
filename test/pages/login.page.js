import { assert } from 'chai';

class Login {
  open() {
    browser.url('/');
  }

  get buttonLogin() {
    return $('.login');
  }

  get inputEmail() {
    return $('body #email');
  }

  get inputPassword() {
    return $('body #passwd');
  }

  get buttonSignIn() {
    return $('body #SubmitLogin');
  }

  get userLoggedIn() {
    return $('.account');
  }

  get welcomeMessage() {
    return $('.info-account');
  }

  login(user) {
    this.buttonLogin.click();
    this.inputEmail.waitForEnabled();
    this.inputEmail.setValue(user.login);
    this.inputPassword.setValue(user.password);
    this.buttonSignIn.click();
  }

  checkLoginSuccessfully(user) {
    this.welcomeMessage.waitForExist();
    assert.equal(
      this.welcomeMessage.getText(),
      'Welcome to your account. Here you can manage all of your personal information and orders.',
    );

    assert.equal(
      this.userLoggedIn.getText(),
      user.name,
    );
  }
}

export const login = new Login();
