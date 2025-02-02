import { createAction, props } from "@ngrx/store";
import { Employee } from "../../../domain/entities/Employee";

export const loadEmployees = createAction('[Employee] Load Employees');
export const loadEmployeesSuccess = createAction(
    '[Employee] Load Employees Success',
    props<{ employees: Employee[] }>() 
);