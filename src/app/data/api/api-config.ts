const BASE_URL = 'https://verbose-orbit-wrgwqgw64799hpw4-8080.app.github.dev/api/employee';

export const apiConfig = {
    employees: {
        url: `${BASE_URL}/all`,
        endpoints: {
            getEmployees: {
                method: 'GET',
                url: `${BASE_URL}/all`,
            },
            getEmployeeById: {
                method: 'GET',
                url: (id: string) => `${BASE_URL}/${id}`,
            },
            createEmployee: {
                method: 'POST',
                url: `${BASE_URL}/add`,
            },
            updateEmployee: {
                method: 'PUT',
                url: (id: string) => `${BASE_URL}/update/${id}`,
            },
        },
    },
};

