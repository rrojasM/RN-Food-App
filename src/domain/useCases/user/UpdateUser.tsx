import { UserRepositoryImpl } from "../../../data/repositories/UserRepository";
import { User } from "../../entities/User";


const { updateUser } = new UserRepositoryImpl();



export const UpdateUser = async (user: User) => {
    return await updateUser(user);
}