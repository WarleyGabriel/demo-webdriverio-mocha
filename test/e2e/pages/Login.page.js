class LoginPage {
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
        this.welcomeMessage.waitForExist();
    }
}

export const loginPage = new LoginPage();
