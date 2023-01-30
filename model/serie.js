import { Production } from './production.js'

export class Serie extends Production {
    #resource
    #locations
    #seasons

    constructor(title, publication, nationality, synopsis, image, resource, locations, seasons) {
        super(title,publication,nationality,synopsis,image);
        this.#resource = resource;
        this.#locations = locations;
        this.#seasons = seasons;
    }

    get resource() {
        return this.#resource;
    }

    set resource(resource) {
        this.#resource = resource;
    }

    get locations() {
        return this.#locations;
    }

    set locations(locations) {
        this.#locations = locations;
    }

    get seasons() {
        return this.#seasons;
    }

    set seasons(seasons) {
        this.#seasons = seasons;
    }
}