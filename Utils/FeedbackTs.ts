class FeedbackTs {
    _username: string;
    _email: string;
    _comment: string;


    constructor(username: string, email: string, comment: string) {
        this._comment = comment;
        this._email = email;
        this._username = username;
    }

    get Username() {

        return this._username;
    }

    get Email() {
        return this._email;
    }

    get Comment() {
        return this._comment;
    }
}
