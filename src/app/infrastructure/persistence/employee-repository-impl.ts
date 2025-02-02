import { HttpClient } from "@angular/common/http";
import { Employee } from "../../domain/entities/Employee";
import { IEmployeeRepository } from "../../domain/repositories/i-employee-repository";
import { firstValueFrom } from "rxjs";

export class EmployeeRepositoryImpl implements IEmployeeRepository {

    private API_URL = 'http://localhost:3000/api/employees';

    constructor(private http: HttpClient) { }

    async findAll(): Promise<Employee[]> {
        return firstValueFrom(this.http.get<Employee[]>(`${this.API_URL}/all`));
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
    delete(id: string): Promise<void> {
        return firstValueFrom(this.http.delete<void>(`${this.API_URL}/${id}`));
    }

}
