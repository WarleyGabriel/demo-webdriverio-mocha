import {expect} from 'chai';
import {login} from '../pages/login.page';
import {contexto} from '../data/contexto';

describe('Página de autenticação.', () => {
    before(() => {
        login.open();
    });

    it('Exibe mensagem de login com sucesso', () => {
        login.fazerLogin(contexto.logins.usuarioPadrao);
        expect(browser.element('.header-lined h1').getText()).to.contain(contexto.logins.usuarioPadrao.nome);
    });
});
