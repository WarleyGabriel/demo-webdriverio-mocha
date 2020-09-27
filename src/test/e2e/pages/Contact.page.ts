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

    sendMessage(content: { subject: string; message: string; file: string }) {
        if (content.file) {
            this.inputFile.setValue(
                `${process.cwd()}/files-to-upload/${content.file}`,
            );
        }

        this.subjectContact.selectByAttribute('value', content.subject);
        this.message.setValue(content.message);

        this.buttonSubmitMessage.click();
    }
}

export default new ContactPage();
