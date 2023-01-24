import { AxiosError } from 'axios';
import { User } from "../../domain/entities/User";
import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { ApiDelivery, ApiDeliveryWithImage } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/models/ResponseApiDelivery";
import mime from 'mime';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';

export class AuthRepositoryImpl implements AuthRepository {

    async registerWithImage(user: User, file: ImageInfo): Promise<ResponseAPIDelivery> {
        console.log('FILE IN REGISTER: ', file);
        try {
            let data = new FormData();

            data.append('image', {
                //@ts-ignore
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
            });
            data.append('user', JSON.stringify(user));

            const res = await ApiDeliveryWithImage.post<ResponseAPIDelivery>('/users/createWithImage', data);
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: IN RESPONSE REGISTER WITH IMAGE ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async register(user: User): Promise<ResponseAPIDelivery> {
        try {
            const res = await ApiDelivery.post<ResponseAPIDelivery>('/users/create', user);
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async login(email: string, password: string): Promise<ResponseAPIDelivery> {
        try {
            const res = await ApiDelivery.post<ResponseAPIDelivery>('/users/login', {
                email,
                password
            });
            /*   console.log('RESPONSE: ', JSON.stringify(res.data)); */
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR LOGIN: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }


}