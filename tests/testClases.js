import { ObjectException } from '../exceptions/objectException.js'
import { ExistsException } from '../exceptions/existsException.js'
import { NotExistException } from '../exceptions/NotExistException.js'
import { EmptyAttributeException } from './../exceptions/emptyAttributeException.js'
import { NullException } from './../exceptions/nullException.js'
import { Category } from './category.js'
import { User } from './user.js'
import { Production } from './production.js'
import { Movie } from './movie.js'
import { Resource } from './resource.js'
import { Person } from './person.js'

export class testPerson {

    testAllAttributes() {
        console.log("Creación de una persona con todos los atributos");
        let person1 = new Person("Pepe", "Sanzhez", "Tejedor", new Date("1980-09-22", "No"));
        console.log(person1);
    }

    testMandatoryAttributes() {
        console.log("Creación de una persona con solo los atributos obligatorios");
        let person2 = new Person("Pepe", "Sanzhez", "Tejedor");
        console.log(person2);
    }

    testWithoutMandatoryAttributes() {
        console.log("Creación de una persona sin los atributos obligatorios");
        let person3 = new Person("Pepe", "Sanzhez");
        console.log(person3);
    }
}
