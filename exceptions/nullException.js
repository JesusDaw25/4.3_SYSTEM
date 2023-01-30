import { BaseException } from "./base.js";

export class NullException extends BaseException {
    constructor(param, fileName, lineNumber) {
        super("[!] The param [" + param + "] can't be null", fileName, lineNumber);
        this.name = "NullException";
    }
}