import { AttributeRequiredException } from './../exceptions/attributeRequiredException.js'

export class Resource { 
    #duration
    #link

    constructor(duration, link) {
        if (!duration) throw new AttributeRequiredException("duration") ;
        this.#duration = duration;
        if (!link) throw new AttributeRequiredException("link") ;
        this.#link = link;
    }

    get duration() {
        return this.#duration;
    }

    set duration(duration) {
        this.#duration = duration;
    }

    get link() {
        return this.#link;
    }

    set link(link) {
        this.#link = link;
    }

}