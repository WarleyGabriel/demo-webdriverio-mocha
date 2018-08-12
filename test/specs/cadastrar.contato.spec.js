import {login} from '../pages/login.page';
import {cadastro} from '../pages/cadastro.page';
import {contexto} from '../data/contexto';

describe('Cadastrar contato.', () => {
    before(() => {
        login.open();
        login.fazerLogin(contexto.logins.usuarioPadrao);
    });

    it('Exibe contato cadastrado com sucesso', () => {
        cadastro.cadastrarContato(contexto.contatos.usuarioPF);
    });
});
