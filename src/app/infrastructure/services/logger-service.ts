import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
    log(message: string): void {
        console.log(`[LOG]: ${message}`);
    }

    error(message: string, error?: any): void {
        console.error(`[ERROR]: ${message}`, error);
    }
}
