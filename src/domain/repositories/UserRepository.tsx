import { ResponseAPIDelivery } from '../../data/sources/remote/models/ResponseApiDelivery';
import { User } from '../entities/User';
import * as ImagePicker from 'expo-image-picker';
export interface UserRepository {
    updateUser(user: User): Promise<ResponseAPIDelivery>;
    updateUserWithImage(user: User, file: ImagePicker.ImageInfo): Promise<ResponseAPIDelivery>;

}