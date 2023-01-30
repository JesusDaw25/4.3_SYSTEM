import { BaseException } from "./base.js";

export class AbstractClassException extends BaseException {
    constructor(param, fileName, lineNumber) {
        super("[!] Cannot construct Abstract instances directly", fileName, lineNumber);
        this.name = "AbstractClassException";
    }
}