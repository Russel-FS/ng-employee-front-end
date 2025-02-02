import { Employee } from "../entities/Employee";

export interface IEmployeeService {
    validateEmployee(employee: Employee): void;
}
