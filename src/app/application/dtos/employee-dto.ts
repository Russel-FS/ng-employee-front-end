export interface CreateEmployeeDto {
    name: string;
    email: string;
}

export interface UpdateEmployeeDto {
    name?: string;
    email?: string;
}