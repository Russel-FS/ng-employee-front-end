import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../domain/entities/Employee';
import { GetAllEmployeesUsecase } from '../../../application/use-cases/get-all-employees-usecase';
import { EmployeeRepositoryImpl } from '../../../infrastructure/persistence/employee-repository-impl';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
    employees: Employee[] = [];
    isLoading = false;
    error: string | null = null;
    private getAllEmployeesUsecase: GetAllEmployeesUsecase;

    constructor(private http: HttpClient) {
        const repository = new EmployeeRepositoryImpl(http);
        this.getAllEmployeesUsecase = new GetAllEmployeesUsecase(repository);
    }
    
    async ngOnInit() {
        await this.loadEmployees();
    }

    async loadEmployees() {
        this.isLoading = true;
        this.error = null;
        try {
            this.employees = await this.getAllEmployeesUsecase.execute();
        } catch (error) {
            this.error = 'Error al cargar los empleados';
            console.error('Error fetching employees:', error);
        } finally {
            this.isLoading = false;
        }
    }
}
