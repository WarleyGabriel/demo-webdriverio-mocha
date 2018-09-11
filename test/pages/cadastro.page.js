import { expect } from 'chai';

class Cadastro {
  get primeiroNome() {
    return $('body #inputFirstName');
  }

  get segundoNome() {
    return $('body #inputLastName');
  }

  get enderecoUm() {
    return $('body #inputAddress1');
  }

  get enderecoDois() {
    return $('body #inputAddress2');
  }

  get empresa() {
    return $('body #inputCompanyName');
  }

  get cidade() {
    return $('body #inputCity');
  }

  get email() {
    return $('body #inputEmail');
  }

  get regiao() {
    return $('body #stateinput');
  }

  get telefone() {
    return $('body #inputPhone');
  }

  get cep() {
    return $('body #inputPostcode');
  }

  get botaoSalvar() {
    return $('.form-group .btn-primary');
  }

  get botaoNovoContato() {
    return $('.panel-footer*=New Contact');
  }

  get mensagemSucesso() {
    return $('.alert-success');
  }

  cadastrarContato(contato) {
    this.botaoNovoContato.click();
    this.primeiroNome.setValue(contato.nome);
    this.segundoNome.setValue(contato.sobreNome);
    this.enderecoUm.setValue(contato.enderecoUm);
    this.enderecoDois.setValue(contato.enderecoDois);
    this.empresa.setValue(contato.empresa);
    this.cidade.setValue(contato.cidade);
    this.email.setValue(contato.email);
    this.regiao.setValue(contato.regiao);
    this.cep.setValue(contato.cep);
    this.telefone.setValue(contato.telefone);
    this.botaoSalvar.click();

    browser.waitForExist(this.mensagemSucesso.selector);
    expect(this.mensagemSucesso.getText()).to.contain('Changes Saved Successfully!');
  }
}

export const cadastro = new Cadastro();
