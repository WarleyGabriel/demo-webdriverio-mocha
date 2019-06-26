import { assert } from 'chai';
import path from 'path';
import fs from 'fs';

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
      const localFilePath = fs.readFileSync(`${path.resolve('./')}/documents/${content.file}`);
      const remoteFilePath = browser.uploadFile(Buffer.from(localFilePath).toString('base64'));
      this.inputFile.setValue(remoteFilePath);
    }

    this.subjectContact.selectByAttribute('value', content.subject);
    this.message.setValue(content.message);

    this.buttonSubmitMessage.click();

    assert.equal(
      this.successMessage.getText(),
      'Your message has been successfully sent to our team.',
    );
  }
}

export const contact = new Contact();
