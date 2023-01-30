import { AttributeRequiredException } from './../exceptions/attributeRequiredException.js'

export class Category { 

    #name
    #description
    

    constructor(name, description = '') {
        if (!name) throw new AttributeRequiredException("name") ;
        this.#name = name;
        this.#description = description;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get description() {
        return this.#description;
    }

    set description(description) {
        this.#description = description;
    }

}