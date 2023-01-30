import { BaseException } from "./base.js";

export class AttributeRequiredException extends BaseException {
    constructor(param, fileName, lineNumber) {
        super("[!] The Attribute [" + param + "] is required", fileName, lineNumber);
        this.name = "AttributeRequiredException";
    }
}