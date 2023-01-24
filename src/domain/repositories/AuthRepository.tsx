import { ResponseAPIDelivery } from "../../data/sources/remote/models/ResponseApiDelivery";
import { User } from "../entities/User";
import * as ImagePicker from 'expo-image-picker';

export interface AuthRepository {
    login(email: string, password: string): Promise<ResponseAPIDelivery>
    register(user: User): Promise<ResponseAPIDelivery>
    registerWithImage(user: User, file: ImagePicker.ImageInfo): Promise<ResponseAPIDelivery>
}