import { createReducer, on } from '@ngrx/store';
import { Employee } from "../../core/models/employee.model";
import { getEmployeesSuccess } from "../actions/employee.actions";

export interface EmployeeReducer {
    employees: Employee[];
}

export const initialState: EmployeeReducer = {
    employees: []
};

export const employeeReducer = createReducer(
    initialState,
    on(getEmployeesSuccess, (state: EmployeeReducer, { employees }) => {
        return {
            ...state,
            employees
        };
    })
);
