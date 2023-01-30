import { BaseException } from "./base.js";

export class ExistsException extends BaseException {
    constructor(param, fileName, lineNumber) {
        super("[!] The param ["+ param +"] already exists", fileName, lineNumber);
        this.name = "ExistsException";
    }
}