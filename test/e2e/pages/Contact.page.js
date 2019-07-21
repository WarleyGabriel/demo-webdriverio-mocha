import path from 'path';

class ContactPage {
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

    goToContactPage() {
        this.contactLink.click();
        this.heading.waitForExist();
    }

    sendMessage(content) {
        if (content.file != null) {
            const localFilePath = `${path.resolve('./')}/documents/${
                content.file
            }`;
            const remoteFilePath = browser.uploadFile(localFilePath);
            this.inputFile.setValue(remoteFilePath);
        }

        this.subjectContact.selectByAttribute('value', content.subject);
        this.message.setValue(content.message);

        this.buttonSubmitMessage.click();
    }
}

export const contactPage = new ContactPage();
