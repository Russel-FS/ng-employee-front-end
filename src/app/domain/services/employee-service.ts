import { Employee } from "../entities/Employee";
import { InvalidEmployeeDataException } from "../exceptions/invalid-employee-data-exception";

export class EmployeeService {

    validateEmployee(employee: Employee): void {
        if (!this.isValidEmail(employee.email)) {
            throw new InvalidEmployeeDataException('Invalid email format');
        }
        
        if (!employee.name || employee.name.length < 2) {
            throw new InvalidEmployeeDataException('Name must be at least 2 characters long');
        }
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
