import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../../domain/entities/Employee';
import { GetAllEmployeesUseCase } from '../../../domain/use-cases/GetAllEmployeesUseCase';
import { Store } from '@ngrx/store';
import * as EmployeeActions from '../../state/actions/employee-actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeForm!: FormGroup;
  employeeList: Employee[] = [];

  constructor(
    private fb: FormBuilder,
    private getAllEmployeeUseCase: GetAllEmployeesUseCase,
    private store: Store
  ) { }

  ngOnInit(): void { 
    this.initForm();
    this.loadEmployees();
  }

  private initForm(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  private loadEmployees(): void {
    this.store.dispatch(EmployeeActions.loadEmployees());
  }


}
