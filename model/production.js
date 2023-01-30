import { AttributeRequiredException } from './../exceptions/attributeRequiredException.js'
import { AbstractClassException } from './../exceptions/abstractClassException.js'

export class Production { 
    
    #title
    #nationality
    #publication
    #synopsis
    #image

    constructor(title, publication, nationality = '', synopsis = '', image = '') {
        if (new.target === Production) {
          throw new AbstractClassException("Cannot construct Abstract instances directly");
        }
        if (!title) throw new AttributeRequiredException("title") ;
        this.#title = title;
        if (!publication) throw new AttributeRequiredException("publication") ;
        this.#publication = publication;
        this.#nationality = nationality;
        this.#synopsis = synopsis;
        this.#image = image;
      }

      get title() {
        return this.#title;
      }

      set title(title){
        this.#title = title;
      }

      get publication() {
        return this.#publication;
      }

      set publication(publication){
        this.#publication = publication;
      }

      get nationality() {
        return this.#nationality;
      }

      set nationality(nationality){
        this.#nationality = nationality;
      }

      get synopsis() {
        return this.#synopsis;
      }

      set synopsis(synopsis){
        this.#synopsis = synopsis;
      }

      get image() {
        return this.#image;
      }

      set image(image){
        this.#image = image;
      }
}