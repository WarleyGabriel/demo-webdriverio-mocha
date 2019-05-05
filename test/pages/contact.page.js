import { assert } from 'chai';
import path from 'path';

class Contact {
  get contactLink() {
    return $('body #contact-link');
  }

  get heading() {
    return $('.page-heading.bottom-indent');
  }

  get subjectContact() {
    return $('body #id_contact');
  }

  get message() {
    return $('body #message');
  }

  get buttonSubmitMessage() {
    return $('body #submitMessage');
  }

  get successMessage() {
    return $('.alert.alert-success');
  }

  get inputFile() {
    return $('body #fileUpload');
  }

  sendMessage(content) {
    this.contactLink.click();
    assert.equal(
      this.heading.getText(),
      'CUSTOMER SERVICE - CONTACT US',
    );

    if (content.file != null) {
      const filePath = `${path.resolve('./')}/documents/`;
      browser.chooseFile(
        this.inputFile.selector,
        `${filePath}${content.file}`,
      );
    }

    this.subjectContact.selectByValue(content.subject);
    this.message.setValue(content.message);

    this.buttonSubmitMessage.click();

    assert.equal(
      this.successMessage.getText(),
      'Your message has been successfully sent to our team.',
    );
  }
}

export const contact = new Contact();
