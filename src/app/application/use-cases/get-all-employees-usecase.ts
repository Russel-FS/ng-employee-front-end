import { Injectable } from "@angular/core"; 
import { IEmployeeRepository } from "../../domain/repositories/i-employee-repository";
import { EmployeeDTO } from "../dtos/employee-dto";
import { IEmployeeUseCase } from "../interfaces/I-employee-use-case";
import { EmployeeMapper } from "../mappers/employee-mapper";
 
export class GetAllEmployeesUsecase implements IEmployeeUseCase {
    
    constructor(private employeeRepository: IEmployeeRepository) {}

    async execute(): Promise<EmployeeDTO[]> {
        const employees = await this.employeeRepository.findAll();
        return employees.map(employee => EmployeeMapper.toDTO(employee));
    }
}
