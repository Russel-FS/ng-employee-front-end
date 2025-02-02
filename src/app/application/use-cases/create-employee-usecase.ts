import { Employee } from "../../domain/entities/Employee";
import { IEmployeeRepository } from "../../domain/repositories/i-employee-repository";
import { CreateEmployeeDto } from "../dtos/employee-dto";

export class CreateEmployeeUsecase {

    constructor(private employeeRepository: IEmployeeRepository) { }

    async execute(employeeDto: CreateEmployeeDto): Promise<Employee> {
        const employee = new Employee(
            Math.random().toString(36).substr(2, 9),
            employeeDto.name,
            employeeDto.email
        );
        return this.employeeRepository.create(employee);
    }
}
