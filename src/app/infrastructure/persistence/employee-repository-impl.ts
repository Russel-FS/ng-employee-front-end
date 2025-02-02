import { HttpClient } from "@angular/common/http";
import { Employee } from "../../domain/entities/Employee";
import { IEmployeeRepository } from "../../domain/repositories/i-employee-repository";
import { firstValueFrom } from "rxjs";
import { API_CONFIG } from "../api/api-config";
import { LoggerService } from "../services/logger-service";
import { RepositoryException } from "../exceptions/repository-exception";

export class EmployeeRepositoryImpl implements IEmployeeRepository {

    private API_URL = 'https://verbose-orbit-wrgwqgw64799hpw4-8080.app.github.dev/api/employee';

    constructor(
        private http: HttpClient,
        private loggerService: LoggerService
    ) { }

    async findAll(): Promise<Employee[]> {
        try {
            this.loggerService.log('Fetching all employees');

            const response = await firstValueFrom(
                this.http.get<any[]>(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.employees}/all`)
            );

            if (!Array.isArray(response)) {
                throw new Error('Invalid response format');
            }

            return response.map(employeeData =>
                new Employee(
                    employeeData.id,
                    employeeData.name,
                    employeeData.email
                )
            );
        } catch (error) {
            this.loggerService.error('Error fetching employees', error);
            throw new RepositoryException('Error fetching employees', error);
        }
    }

    findById(id: string): Promise<Employee> {
        return firstValueFrom(this.http.get<Employee>(`${this.API_URL}/${id}`));
    }
    create(employee: Employee): Promise<Employee> {
        return firstValueFrom(this.http.post<Employee>(this.API_URL, employee));
    }
    update(id: string, employee: Employee): Promise<Employee> {
        return firstValueFrom(this.http.put<Employee>(`${this.API_URL}/${id}`, employee));
    }
    async delete(id: string): Promise<void> {
        await firstValueFrom(
            this.http.delete(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.employees}/${id}`)
        );
    }

}
