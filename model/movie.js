import { Production } from './production.js'

export class Movie extends Production {
    #resource
    #locations

    constructor(title, publication, nationality, synopsis, image, resource, locations) {
        super(title,publication,nationality,synopsis,image);
        this.#resource = resource;
        this.#locations = locations;
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

}