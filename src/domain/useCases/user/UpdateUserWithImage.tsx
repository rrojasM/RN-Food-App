import { UserRepositoryImpl } from "../../../data/repositories/UserRepository";
import { User } from "../../entities/User";
import * as ImagePicker from 'expo-image-picker';


const { updateUserWithImage } = new UserRepositoryImpl();

export const UpdateUserWithImage = async (user: User, file: ImagePicker.ImageInfo) => {
    return await updateUserWithImage(user, file);
}