import { BaseException } from "./base.js";

export class NotExistException extends BaseException {
    constructor(param, fileName, lineNumber) {
        super("[!] The param ["+ param +"] not exist", fileName, lineNumber);
        this.name = "NotExistException";
    }
}