import {expect} from 'chai';

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

    get botaoEntrar() {
        return $('body #login');
    }

    get mensagemBemVindo() {
        return $('h1');
    }

    fazerLogin(usuario) {
        this.inputEmail.setValue(usuario.login);
        this.inputPassword.setValue(usuario.senha);
        this.botaoEntrar.click();

        browser.waitForExist(this.mensagemBemVindo.selector);
        expect(this.mensagemBemVindo.getText()).to.contain('Welcome Back');
    }
}

export const login = new Login();
