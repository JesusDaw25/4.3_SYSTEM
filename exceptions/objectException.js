import { BaseException } from "./base.js";

export class ObjectException extends BaseException {
    constructor(param, fileName, lineNumber) {
        super("[!] The param isn't a "+ param +" object", fileName, lineNumber);
        this.name = "ObjectException";
    }
}