import { Injectable } from "@angular/core";
import { IEmployeeRepository } from "../../domain/repositories/i-employee-repository";
import { EmployeeService } from "../../domain/services/employee-service";
import { EmployeeDTO } from "../dtos/employee-dto";
import { IEmployeeUseCase } from "../interfaces/I-employee-use-case";
import { EmployeeMapper } from "../mappers/employee-mapper";
  
export class CreateEmployeeUsecase implements IEmployeeUseCase {

    constructor(
        private employeeRepository: IEmployeeRepository,
        private employeeService: EmployeeService
    ) {}

    async execute(employeeDTO: EmployeeDTO): Promise<EmployeeDTO> {
        const employee = EmployeeMapper.toDomain(employeeDTO);
        this.employeeService.validateEmployee(employee);
        const createdEmployee = await this.employeeRepository.create(employee);
        return EmployeeMapper.toDTO(createdEmployee);
    }
}
