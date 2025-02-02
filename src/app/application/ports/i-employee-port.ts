import { EmployeeDTO } from "../dtos/employee-dto";

export interface IEmployeePort {
    getAllEmployees(): Promise<EmployeeDTO[]>;
    getEmployeeById(id: string): Promise<EmployeeDTO>;
    createEmployee(employee: EmployeeDTO): Promise<EmployeeDTO>;
    updateEmployee(id: string, employee: EmployeeDTO): Promise<EmployeeDTO>;
    deleteEmployee(id: string): Promise<void>;
}
