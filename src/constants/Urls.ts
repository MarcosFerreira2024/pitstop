
const production = true

const baseURL = production? "http://localhost:3000" : ""



export const URLS = {
    login: `${baseURL}/auth/login`,
    register: `${baseURL}/auth/register`
}