import { Employee } from "../../core/domain/models/employee";
import { EmployeeDto } from "../dtos/employee-dto";

export class EmployeeMapper {

    static toDomain(employeeDTO: EmployeeDto): Employee {
        return {
            id: employeeDTO.id ? employeeDTO.id : null,
            name: employeeDTO.name,
            email: employeeDTO.email,
        };
    }

    static toDTO(employee: Employee): EmployeeDto {
        return {
            id: employee.id ? employee.id : null,
            name: employee.name,
            email: employee.email,
        };
    }
}
