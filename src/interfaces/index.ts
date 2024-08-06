export type GetUsers ={
    id: number,
    name: string,
    username: string,
    email: string,
    address: GetUsersAddress,
    phone: string,
    website: string,
    company: GetUsersCompany
}

type GetUsersAddress = {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo:GetUsersGeo 
    }
    
    type GetUsersGeo= {
            lat: number,
            lng: number
        }
        type GetUsersCompany = {
        name: string,
        catchPhrase: string,
        bs: string,
    }