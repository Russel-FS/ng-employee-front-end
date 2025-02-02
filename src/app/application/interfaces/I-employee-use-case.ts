import { EmployeeDTO } from "../dtos/employee-dto";

export interface IEmployeeUseCase {
    execute(params?: any): Promise<EmployeeDTO | EmployeeDTO[] | void>;
}
