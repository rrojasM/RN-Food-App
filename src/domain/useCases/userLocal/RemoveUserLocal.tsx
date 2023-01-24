import { UserLocalRepositoryImpl } from "../../../data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const { remove } = new UserLocalRepositoryImpl();

export const removeUserLocalUseCase = async () => {
    return await remove();
}