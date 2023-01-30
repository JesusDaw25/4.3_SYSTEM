import { AttributeRequiredException } from './../exceptions/attributeRequiredException.js'

export class Coordinate { 
    #latitude
    #longitude

    constructor(latitude, longitude) {
        if (!latitude) throw new AttributeRequiredException("latitude") ;
        this.#latitude = latitude;
        if (!longitude) throw new AttributeRequiredException("longitude") ;
        this.#longitude = longitude;
    }

    get latitude() {
        return this.#latitude;
    }

    set latitude(latitude) {
        this.#latitude = latitude;
    }

    get longitude() {
        return this.#longitude;
    }

    set longitude(longitude) {
        this.#longitude = longitude;
    }

}