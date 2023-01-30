import { BaseException } from "./base.js";

export class EmptyAttributeException extends BaseException {
    constructor(param, fileName, lineNumber) {
        super("[!] The Attribute [" + param + "] can't be empty", fileName, lineNumber);
        this.name = "EmptyAttributeException";
    }
}