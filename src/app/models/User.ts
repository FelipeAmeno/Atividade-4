export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: String
        }
    }
    phone: String,
    website: String,
    company: {
        name: String,
        catchPhrase: String,
        bs: string
    }
}
