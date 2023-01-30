'use strict'
//importamos clases
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

export let System = (function () {
    let instantiated;
    function init() {

        //creamos clase y definimos propiedades
        class System {
            #name
            #users
            #productions
            #categories
            #actors
            #directors
            //creo categoria por defecto
            #defaultCategory = new Category("Categoria por defecto");

            constructor(name) {
                this.#name = name;
                this.#users = [];
                this.#productions = [];
                this.#categories = [];
                //creo un array de objetos
                this.#categories.push({
                    category: this.#defaultCategory,
                    productions: []
                });
                this.#actors = [];
                this.#directors = [];
            }

            get name() {
                return this.#name;
            }

            set name(name) {
                if (name) throw new EmptyAttributeException("name");
                this.#name = name;
            }

            get categories() {
                let arrayCategories = this.#categories;

                return {
                    *[Symbol.iterator]() {
                        for (let category of arrayCategories) {
                            yield category;
                        }
                    }
                }

            }
            //añadir categoria donde antes miro excepciones y para meterlo hago un push en al erray de objetos con la categoria y una produccion vacia y retorno longitud de array
            addCategory(category) {
                if (!category) throw new NullException("Category");
                if (!category instanceof Category) throw new ObjectException("Category");
                if (this.#categories.some(elem => elem === category)) throw new ExistsException("Category");

                this.#categories.push({
                    category: category,
                    productions: [],
                });

                return this.#categories.length;
            }
            //para el remove , a traves de la funcion definida para ver el indice de dicha categoria , y con el indice de la de por defecto (aunque sabemos que es la posicion 0)
            //primero movemos las producciones de dicha categoria a la de por defecto y posteriormente cons splice borramos la categoria
            //retornamos logitud 
            removeCategory(category) {
                if (!this.#categories.some(elem => elem.category === category)) throw new NotExistException("Category");
                //posicion de la categoria
                let index = this.#getCategoryPosition(category);
                //posicion de la categoria por defecto (aunque ya se sabe que es la primera)
                let defaultIndex = this.#getCategoryPosition(this.#defaultCategory);
                //
                let deleteCategory = this.#categories[index];
                let deleteCategoryProductions = deleteCategory.productions;
                deleteCategoryProductions.forEach(production => {
                    this.#categories[defaultIndex].productions.push(production);
                });
                this.#categories.splice(index, 1);
                return this.#categories.length;

            }
            //funcion retorna posicion de la categoria 
            #getCategoryPosition(category, categories = this.#categories) {
                function compareElements(element) {
                    return (category === element.category)
                }

                return categories.findIndex(compareElements);
            }
            //iterador de array users
            get users() {
                let arrayUsers = this.#users;

                return {
                    *[Symbol.iterator]() {
                        for (let user of arrayUsers) {
                            yield user;
                        }
                    }
                }
            }

            //añadimos usuario al array atraves de push , comprobado excepciones antes
            addUser(user) {
                if (!user instanceof User) throw new ObjectException("User");
                if (!user) throw new NullException("User");
                if (this.#users.some(elem => elem.username === user.username)) throw new ExistsException("UserName");
                if (this.#users.some(elem => elem.email == user.email)) throw new ExistsException("Mail");

                this.#users.push(user);
                return this.#users.length;
            }

            //remove de usuario miramos con indexof el indice y con splice lo eliminamos
            removeUser(user) {
                console.log(user);
                if (!user instanceof User) throw new ObjectException("User");
                if (!user) throw new NullException("User");
                if (!this.#users.some(elem => elem === user)) throw new NotExistException("User");

                let index = this.#users.indexOf(user);
                this.#users.splice(index, 1);
                return this.#users.length;
            }
            //iterador de array produciones
            get productions() {
                let arrayProductions = this.#productions;

                return {
                    *[Symbol.iterator]() {
                        for (let production of arrayProductions) {
                            yield production;
                        }
                    }
                }

            }
            //añadimos producto con push y devolvemos longitud
            addProduction(production) {

                if (!production) throw new NullException("production");
                if (!production instanceof Production) throw new ObjectException("production");
                if (this.#productions.some(elem => elem === production)) throw new ExistsException("production");

                this.#productions.push(production);
                return this.#productions.length;
            }
            //remove de producto vemos el indice con idexof y borramos con splice
            removeProduction(production) {
                if (!production) throw new NullException("production");
                if (!production instanceof Production) throw new ObjectException("production");
                if (!this.#productions.some(elem => elem === production)) throw new NotExistException("production");

                let index = this.#productions.indexOf(production);
                this.#productions.splice(index, 1);
                return this.#productions.length;

            }
            //iterador de array de actors
            get actors() {
                let arrayActors = this.#actors;

                return {
                    *[Symbol.iterator]() {
                        for (let actor of arrayActors) {
                            yield actor;
                        }
                    }
                }

            }

            //iterador de array de directores
            get directors() {
                let arrayDirectors = this.#directors;

                return {
                    *[Symbol.iterator]() {
                        for (let director of arrayDirectors) {
                            yield director;
                        }
                    }
                }

            }
            //añadimos actor en array de objetos con push de actor(person) , con una produccion vacia
            //retornamos longitud
            addActor(person) {
                if (!person instanceof Person) throw new ObjectException("Person");
                if (!person) throw new NullException("Person");
                if (this.#actors.some(elem => elem.actor === person)) throw new ExistsException("Person");

                this.#actors.push({
                    actor: person,
                    productions: []
                });

                return this.#actors.length;
            }
            //borramos actor buscando atraves de una funcion defeinida que encuentra el indice , y borramos con splice
            //retornamos longitud
            removeActor(person) {
                if (!person) throw new NullException("person");
                if (!person instanceof Production) throw new ObjectException("person");
                if (!this.#actors.some(elem => elem.actor === person)) throw new NotExistException("person");

                let index = this.#getActorIndex(person);
                this.#actors.splice(index, 1);
                return this.#actors.length;

            }
            //indica el indice del actor
            #getActorIndex(person, actors = this.#actors) {

                function compareElements(element) {
                    return (person === element.actor)
                }

                return actors.findIndex(compareElements);
            }

            //añadimos actor en array de objetos con push de director(person) , con una produccion vacia
            //retornamos longitud
            addDirector(person) {
                if (!person instanceof Person) throw new ObjectException("Person");
                if (!person) throw new NullException("Person");
                if (this.#directors.some(elem => elem.director === person)) throw new ExistsException("Person");

                this.#directors.push({
                    director: person,
                    productions: []
                });

                return this.#directors.length;
            }
            //borramos director buscando atraves de una funcion defeinida que encuentra el indice , y borramos con splice
            //retornamos longitud
            removeDirector(person) {
                if (!person) throw new NullException("person");
                if (!person instanceof Production) throw new ObjectException("person");
                if (!this.#directors.some(elem => elem.director === person)) throw new NotExistException("person");

                let index = this.#getDirectorIndex(person);
                this.#directors.splice(index, 1);
                return this.#directors.length;

            }
            //indica indice de director
            #getDirectorIndex(person, directors = this.#directors) {

                function compareElements(element) {
                    return (person === element.director)
                }

                return directors.findIndex(compareElements);
            }

            // asiganamos categoria a produccion
            //si no existe la produccion se mete en el array de produccinoes
            //si la categoria no existe mete la categoria con la produccion en el array 
            //si la categoria existe pete la produccion en el sistio de esa categoria
            assignCategory(category, ...productions) {
                if (!category) throw new NullException("category");
                if (!productions) throw new NullException("production");
                let index;

                for (const production of productions) {
                    if (this.#productions.indexOf(production) == -1) {
                        this.#productions.push(production);
                    }
                }

                if (!this.#categories.some(elem => elem.category === category)) {
                    this.#categories.push({
                        category: category,
                        productions: productions
                    });
                    //funcion indica indice de la categoria en el array de categories
                    index = this.#getCategoryPosition(category);

                } else {

                    index = this.#getCategoryPosition(category);

                    for (const production of productions) {
                        // Validamos que no este esa produccion para no duplicar 
                        if (this.#categories[index].productions.indexOf(production) == -1) {
                            this.#categories[index].productions.push(production);
                        }
                    }
                }
                //retorna producciones de la categoria
                return this.#categories[index].productions.length;
            }

            //desasignar producciones de una categoria 
            //vemos indice de la categoria
            //actualizamos las producciones de la categoria atraves de la funcion get diference que devuelve array con las producciones difeerentes de la pasada por parametro

            deassignCategory(category, ...productions) {
                if (!category) throw new NullException("category");
                if (!productions) throw new NullException("production");
                let index = this.#getCategoryPosition(category);
                this.#categories[index].productions = this.#getDifference(this.#categories[index].productions, productions);
                return this.#categories[index].productions.length;
            }

            //Lo que hace es recorrer el array1 (producciones) y comparar con el array2 (productions) 
            //y te devuelve un array (resultante) con lo que no sea igual entre los 2.
            #getDifference(array1, array2) {
                return array1.filter(object1 => {
                    return !array2.some(object2 => {
                        return object1 === object2;
                    });
                });
            }

            //                                =============================LOS DEMAS ASSIGNAR Y DESASIGNAR SON IGUALES===========================

            assignDirector(person, ...productions) {
                if (!person) throw new NullException("Director");
                if (!productions) throw new NullException("production");
                let index;

                for (const production of productions) {
                    if (this.#productions.indexOf(production) == -1) {
                        this.#productions.push(production);
                    }
                }

                if (!this.#directors.some(elem => elem.director === person)) {
                    this.#directors.push({
                        director: person,
                        productions: productions
                    });

                    index = this.#getDirectorIndex(person);

                } else {

                    index = this.#getDirectorIndex(person);

                    for (const production of productions) {
                        // Validamos que no este esa produccion para no duplicar 
                        if (this.#directors[index].productions.indexOf(production) == -1) {
                            this.#directors[index].productions.push(production);
                        }
                    }
                }

                return this.#directors[index].productions.length;
            }

            deassignDirector(person, ...productions) {
                if (!person) throw new NullException("Director");
                if (!productions) throw new NullException("production");
                let index = this.#getDirectorIndex(person);
                this.#directors[index].productions = this.#getDifference(this.#directors[index].productions, productions);
                return this.#directors[index].productions.length;
            }

            assignActor(person, ...productions) {
                if (!person) throw new NullException("Actor");
                if (!productions) throw new NullException("production");
                let index;

                for (const production of productions) {
                    if (this.#productions.indexOf(production) == -1) {
                        this.#productions.push(production);
                    }
                }

                if (!this.#actors.some(elem => elem.actor === person)) {
                    this.#actors.push({
                        actor: person,
                        productions: productions
                    });

                    index = this.#getActorIndex(person);

                } else {

                    index = this.#getActorIndex(person);

                    for (const production of productions) {
                        // Validamos que no este esa produccion para no duplicar 
                        if (this.#actors[index].productions.indexOf(production) == -1) {
                            this.#actors[index].productions.push(production);
                        }
                    }
                }

                return this.#actors[index].productions.length;
            }

            deassignActor(person, ...productions) {
                if (!person) throw new NullException("Actor");
                if (!productions) throw new NullException("production");
                let index = this.#getActorIndex(person);
                this.#actors[index].productions = this.#getDifference(this.#actors[index].productions, productions);

                return this.#actors[index].productions.length;
            }
            //creo un array , recorremos los actores y miramos si la produccion de ese actor es igual para meterlo al array creado para retornarlo como iterador
            getCast(production) {
                if (!production) throw new NullException("production");

                let arrayFinal = [];
                for (const actor of this.#actors) {
                    for (const produccion of actor.productions) {
                        if (produccion === production) {
                            arrayFinal.push(actor.actor);
                        }
                    }
                }

                return {
                    *[Symbol.iterator]() {
                        for (let actor of arrayFinal) {
                            yield actor;
                        }
                    }
                }



            }
            //miramos indice del director metemos las produciones de ese director en una array
            //iteramos ese array retornandolo
            getProductionsDirector(person) {
                if (!person) throw new NullException("Director");

                let index = this.#getDirectorIndex(person);
                let arrayProductionsDirectors = this.#directors[index].productions;

                return {
                    *[Symbol.iterator]() {
                        for (let director of arrayProductionsDirectors) {
                            yield director;
                        }
                    }
                }



            }



            getProductionsActor(person) {
                if (!person) throw new NullException("Actor");
                let index = this.#getActorIndex(person);
                let arrayActorsProductions = this.#actors[index].productions;


                return {
                    *[Symbol.iterator]() {
                        for (let actor of arrayActorsProductions) {
                            yield actor;
                        }
                    }
                }



            }

            getProductionsCategory(category) {
                if (!category) throw new NullException("category");

                let index = this.#getCategoryPosition(category);
                let arrayProductionsCategory = this.#categories[index].productions;


                return {
                    *[Symbol.iterator]() {
                        for (let category of arrayProductionsCategory) {
                            yield category;
                        }
                    }
                }

            }
        }

        let instance = new System();
        Object.freeze(instance);
        return instance;
    }
    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    };
})();