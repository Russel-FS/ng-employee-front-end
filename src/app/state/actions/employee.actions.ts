import { Employee } from "../../core/models/employee.model";
import { createAction, props } from "@ngrx/store";

export const getEmployees = createAction('[Employee] Get Employees');
export const getEmployeesSuccess = createAction(
    '[Employee] Get Employees success',
     props<{ employees: Employee[] }>()
);