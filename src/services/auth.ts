"use server"
import { URLS } from "@/constants/Urls";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Login = {
    email: string;
    password: string
}

export type Token = {
    token: string
}


export type LoginResponse = {
    token: string
    message: string
    status: number
}

export type ErrorResponse = {
    message: string
    status: number
}


export const handleFetchLogin = async (data:Login):Promise<LoginResponse | ErrorResponse> => {
    
    try {

        const response = await fetch(URLS.login,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()

        if (response.status !== 200 || json instanceof Error) {

            return {
                message: json.message,
                status: response.status
            }

        }


        await setToken(json.token)


        return {
            token: json.token,
            message: "Login realizado com sucesso",
            status: 200
        }
    }

    catch (error) {
        if (error instanceof Error) {
            return {
                message: error.message,
                status: 500
            }
        }
        return {
            message: "Ocorreu um erro inesperado",
            status: 500
        }
    }

    


}

export const setToken = async (token: string) => {
     (await cookies()).set("token", token)
}

export const deleteToken = async () => {
    (await cookies()).delete("token")
    redirect("/auth/login")
}



type SignIn = {
        email: string;
        password: string;
        confirmPassword: string;
        name:string; 

}

type SigInResponse = {
    message: string; 
    status: number; 
}

export const handleFetchSignIn= async (data:SignIn):Promise<SigInResponse | ErrorResponse> => {

    try {

        const response = await fetch(URLS.login,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()

        if (response.status !== 200 || json instanceof Error) {

            return {
                message: json.message,
                status: response.status
            }

        }

        return {
            message: "Cadastro realizado com sucesso",
            status: 200
        }
    }

    catch (error) {
        if (error instanceof Error) {
            return {
                message: error.message,
                status: 500
            }
        }
        return {
            message: "Ocorreu um erro inesperado",
            status: 500
        }
    }

    


}