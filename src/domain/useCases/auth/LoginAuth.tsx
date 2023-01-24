import { AuthRepositoryImpl } from "../../../data/repositories/AuthRepository";
const { login } = new AuthRepositoryImpl();

export const LoginAuthCase = async (email: string, password: string) => {
    return await login(email, password);
}