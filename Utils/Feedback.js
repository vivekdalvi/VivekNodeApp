const FileStorage = require('../Utils/FileStorage');
class Feedback {

    constructor(username, email, comment) {
        this.username = username;
        this.email = email;
        this.comment = comment;
    }

    getComment() {
        return this.comment;
    }

    getUserName() {
        return this.username;
    }

    getEmail() {
        return this.email;
    }

    writeFeedback() {
        const filestorage = new FileStorage('./Utils/feedback.txt');
        const entry = filestorage.WriteFile(this.getUserName() + "," + this.getEmail() + "," + this.getComment());
        const data = filestorage.ReadFile().then(console.log);
    }

};

module.exports = Feedback;
