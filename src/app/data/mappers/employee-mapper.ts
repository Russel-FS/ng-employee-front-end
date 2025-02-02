import { Employee } from "../../core/domain/models/employee";
import { EmployeeDto } from "../dtos/employee-dto";

export class EmployeeMapper {

    static toDomain(employeeDTO: EmployeeDto): Employee {
        return {
            id: employeeDTO.id,
            name: employeeDTO.name,
            email: employeeDTO.email,
        };
    }

    static toDTO(employee: Employee): EmployeeDto {
        return {
            id: employee.id,
            name: employee.name,
            email: employee.email,
        };
    }
}
