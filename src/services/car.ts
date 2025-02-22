import { URLS } from "@/constants/Urls"

export type Car = {
    id: string,    
    title: string,
    description: string,
    photos: string[],
    oldPrice: string,
    newPrice: string
    seller: {
        id: string,
        name: string,
        email: string,
    }
    city: string
    state: string
    negotiable: boolean
    

}


export const getCarInfo = async (id:string) => {
    try {
       const response = await fetch(URLS.car.setId(id))
       
        if (response.status !== 200 ) {
            throw new Error (response.statusText)
        }
        const json = await response.json()

        if (json instanceof Error) {
            throw new Error (json.message)

        }
        return json as Car    




    
    }
    catch (error) {
        if (error instanceof Error) {
            return new Error(error.message)
        }
        return new Error ("Algo deu errado")
    }

}