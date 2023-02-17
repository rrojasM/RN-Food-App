import { User } from "../../domain/entities/User";


export const userInitialState: User = {
    id: '',
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: '',
    session_token: '',
    roles: [],
}