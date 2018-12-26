import { assert } from 'chai';

class Register {
  get fieldFirstName() {
    return $('body #inputFirstName');
  }

  get fieldLastName() {
    return $('body #inputLastName');
  }

  get fieldAddress() {
    return $('body #inputAddress1');
  }

  get fieldAddressTwo() {
    return $('body #inputAddress2');
  }

  get fieldCompany() {
    return $('body #inputCompanyName');
  }

  get fiedlCity() {
    return $('body #inputCity');
  }

  get fieldEmail() {
    return $('body #inputEmail');
  }

  get fieldRegion() {
    return $('body #stateinput');
  }

  get fieldTelephone() {
    return $('body #inputPhone');
  }

  get fieldCEP() {
    return $('body #inputPostcode');
  }

  get buttonSave() {
    return $('.form-group .btn-primary');
  }

  get buttonNewContact() {
    return $('.panel-footer*=New Contact');
  }

  get successMessage() {
    return $('.alert-success');
  }

  registerContact(contact) {
    this.buttonNewContact.click();
    this.fieldFirstName.setValue(contact.firstName);
    this.fieldLastName.setValue(contact.lastName);
    this.fieldAddress.setValue(contact.address);
    this.fieldAddressTwo.setValue(contact.addressTwo);
    this.fieldCompany.setValue(contact.company);
    this.fiedlCity.setValue(contact.city);
    this.fieldEmail.setValue(contact.email);
    this.fieldRegion.setValue(contact.region);
    this.fieldCEP.setValue(contact.cep);
    this.fieldTelephone.setValue(contact.telephone);
    this.buttonSave.click();

    browser.waitForExist(this.successMessage.selector);
    assert.include(this.successMessage.getText(), 'Changes Saved Successfully!');
  }
}

export const register = new Register();
