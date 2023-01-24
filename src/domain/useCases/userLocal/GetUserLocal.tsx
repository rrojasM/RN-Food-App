import { UserLocalRepositoryImpl } from "../../../data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const { getUser } = new UserLocalRepositoryImpl();

export const getUserLocalUseCase = async () => {
    return await getUser();
}