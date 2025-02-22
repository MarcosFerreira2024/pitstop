
const production = true

const baseURL = production? "http://localhost:3000/api" : ""



export const URLS = {
    login: `${baseURL}/auth/login`,
    register: `${baseURL}/auth/register`,
    car: {
        setId: (id:string) => `${baseURL}/car/${id}`
    }
}