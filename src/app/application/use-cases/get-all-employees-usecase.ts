import { Employee } from "../../domain/entities/Employee";
import { IEmployeeRepository } from "../../domain/repositories/i-employee-repository";

export class GetAllEmployeesUsecase {
    constructor(private employeeRepository: IEmployeeRepository) {}

    async execute(): Promise<Employee[]> {
        return this.employeeRepository.findAll();
    }
}
