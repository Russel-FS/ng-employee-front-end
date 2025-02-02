export class InvalidEmployeeDataException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidEmployeeDataException';
    }
}
