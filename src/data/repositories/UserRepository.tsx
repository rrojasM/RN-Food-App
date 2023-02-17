import { ImageInfo } from "expo-image-picker";
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { ResponseAPIDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { AxiosError } from "axios";
import { ApiDelivery, ApiDeliveryWithImage } from "../sources/remote/api/ApiDelivery";
import mime from "mime";
import * as ImagePicker from 'expo-image-picker';


export class UserRepositoryImpl implements UserRepository {


    async updateUser(user: User): Promise<ResponseAPIDelivery> {
        try {
            const res = await ApiDelivery.put<ResponseAPIDelivery>('/users/updateWithoutImage', user);
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async updateUserWithImage(user: User, file: ImageInfo): Promise<ResponseAPIDelivery> {
        try {
            let data = new FormData();

            data.append('image', {
                //@ts-ignore
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
            });
            data.append('user', JSON.stringify(user));

            const res = await ApiDeliveryWithImage.put<ResponseAPIDelivery>('/users/update', data);
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: IN RESPONSE REGISTER WITH IMAGE ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
}