import { Employee } from "../../domain/entities/Employee";
import { EmployeeDTO } from "../dtos/employee-dto";

export class EmployeeMapper {

    static toDTO(employee: Employee): EmployeeDTO {
        return new EmployeeDTO(
            employee.id,
            employee.name,
            employee.email
        );
    }

    static toDomain(employeeDTO: EmployeeDTO): Employee {
        return new Employee(
            employeeDTO.id,
            employeeDTO.name,
            employeeDTO.email
        );
    }
}
