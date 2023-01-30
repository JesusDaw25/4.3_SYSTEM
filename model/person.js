import { AttributeRequiredException } from './../exceptions/attributeRequiredException.js'

export class Person {

    #name
    #lastname1
    #lastname2
    #born
    #picture

    constructor(name, lastname1, born, lastname2 = '', picture = '') {
        if (!name) throw new AttributeRequiredException("name") ;
        this.#name = name ;
        if (!lastname1) throw new AttributeRequiredException("lastname1") ;
        this.#lastname1 = lastname1;
        if (!born) throw new AttributeRequiredException("born") ;
        this.#born = born
        this.#lastname2 = lastname2;
        this.#picture = picture;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get lastname1() {
        return this.#lastname1;
    }

    set lastname1(lastname1) {
        this.#lastname1 = lastname1;
    }

    get born() {
        return this.#born;
    }

    set born(born) {
        this.#born = born;
    }

    get lastname2() {
        return this.#lastname2;
    }

    set lastname2(lastname2) {
        this.#lastname2 = lastname2;
    }

    get picture() {
        return this.#picture;
    }

    set picture(picture) {
        this.#picture = picture;
    }
}