import { AttributeRequiredException } from './../exceptions/attributeRequiredException.js'

export class User {

    username
    email
    password

    constructor(username, email, password) {
        if (!username) throw new AttributeRequiredException("username") ;
        this.username = username ;
        if (!email) throw new AttributeRequiredException("email") ;
        this.email = email;
        if (!password) throw new AttributeRequiredException("password") ;
        this.password = password
    }

    get username() {
        return this.username;
    }

    set username(username) {
        this.username = username;
    }

    get email() {
        return this.email;
    }

    set email(email) {
        this.email = email;
    }

    get password() {
        return this.password;
    }

    set password(password) {
        this.password = password;
    }

}