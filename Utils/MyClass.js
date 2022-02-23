class MyClass {

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
};

module.exports = MyClass;
