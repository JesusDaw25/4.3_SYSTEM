'use strict'


import { Category } from './model/category.js'
import { Resource } from './model/resource.js'
import { User } from './model/user.js'
import { Coordinate } from './model/coordinate.js'
import { Production } from './model/production.js'
import { System } from './model/system.js'
import { Movie } from './model/movie.js'
import {Serie} from './model/serie.js'
import {Person} from './model/person.js'
/*
 ==== TESTS ====
*/





function testSystem() {
    let sistema = new System.getInstance("Video Stream");
    console.log("Objeto sistema: ");
    console.log(sistema);
    console.log("Get name: " + sistema.name);
    let category = new Category("Terror", "Películas de terror.");
    //console.log("Número de categorias al insertar una nueva: " +  sistema.addCategory(category));
    for (const category of sistema.categories) {
        console.log(category);
    }
    //console.log("Número de categorias al borrar una categoria: " +  sistema.removeCategory(category));
    let pelicula = new Movie("Prueba", "test", "test", "synopsis", "image", new Resource(2,"google link"), []);
    let pelicula1 = new Movie("Prueba2", "test", "test", "synopsis", "image", new Resource(2,"google link"), []);
    let pelicula2 = new Movie("Prueba3", "test", "test", "synopsis", "image", new Resource(2,"google link"), []);
    let pelicula3 = new Movie("Pruedfw3", "teewfst", "tewefst", "synowefpsis", "imawefge", new Resource(2,"google link"), []);
    console.log(sistema.assignCategory(category,pelicula, pelicula1, pelicula2));
    console.log(sistema.deassignCategory(category, pelicula1));
    for (const category of sistema.categories) {
        console.log(category);
    }
   /*let usuario = new User("Juan", "juan@test.com", "asjdka413");
   let usuario1 = new User("Pepe", "pepe@test.com", "asjasdasddka413");
   console.log(sistema.addDirector(usuario));
   console.log(sistema.addDirector(usuario1));
   console.log(sistema.removeDirector(usuario1));*/
    console.log("=======================----==============================")
    let director1 = new Person("jesus","velduque","velazquez","25-12-2000","1.jpg");
    sistema.addDirector(director1) ;
    let director2 = new Person("jose manuel","lopez","garcia","12-02-1979","2.jpg");

    console.log(sistema.assignDirector(director1,pelicula));
    console.log(sistema.assignDirector(director2,pelicula1));
    console.log(sistema.deassignDirector(director2,pelicula1));
    console.log("=======================----==============================")
    let actor1 = new Person("jesus","velduque","velazquez","25-12-2000","1.jpg");
    let actor2 = new Person("jose manuel","lopez","garcia","12-02-1979","2.jpg");

    console.log(sistema.assignActor(actor1,pelicula2));
    console.log(sistema.assignActor(actor2,pelicula));
    console.log(sistema.deassignActor(actor2,pelicula));
    console.log("=======================----==============================");
    console.log(sistema.getProductionsDirector(director1));
    console.log("=======================----==============================");

    sistema.addProduction(pelicula3);
    for (const production of sistema.productions) {
        console.log(production);
    }
    console.log(sistema.assignActor(director2,pelicula))
    console.log(sistema.getCast(pelicula));
    console.log(sistema.assignDirector(director1,pelicula3))
    for (const x of sistema.directors) {
        console.log(x);
    }
    console.log(sistema.getProductionsDirector(director1));
}

try {
    //testPerson();
    //testCategory();
    //testResource();
    //testUser();
    //testCoordinate();
    //testProduction();
    //testMovie();
    //testSerie();
    testSystem();
} catch (error) {
    console.error(error);
}

