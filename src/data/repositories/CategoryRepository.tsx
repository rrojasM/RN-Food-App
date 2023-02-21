import { AxiosError } from 'axios';
import { Category } from '../../domain/entities/Category';
import { CategoryRepository } from '../../domain/repositories/CategoryRepository';
import { ApiDelivery, ApiDeliveryWithImage } from '../sources/remote/api/ApiDelivery';
import { ResponseAPIDelivery } from '../sources/remote/models/ResponseApiDelivery';
import mime from "mime";
import * as ImagePicker from 'expo-image-picker';
import { ImageInfo } from "expo-image-picker";


export class CategoryRepositoryImp implements CategoryRepository {
    async create(category: Category, file: ImageInfo): Promise<ResponseAPIDelivery> {
        try {
            let data = new FormData();

            data.append('image', {
                //@ts-ignore
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
            });
            data.append('category', JSON.stringify(category));

            const res = await ApiDeliveryWithImage.post<ResponseAPIDelivery>('/categories/create', data);
            return Promise.resolve(res.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR AL EJECUTAR CREATE CATEGORY: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async getAll(): Promise<Category[]> {
        try {
            const res = await ApiDelivery.get<Category[]>('/categories/getAll');
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR AL EJECUTAR GET ALL CATEGORIES: ', JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async update(category: Category): Promise<ResponseAPIDelivery> {
        try {
            const res = await ApiDelivery.put<ResponseAPIDelivery>('/categories/update', category);
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR AL ELIMINAR CATEGORY: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async updateWithImage(category: Category, file: ImagePicker.ImageInfo): Promise<ResponseAPIDelivery> {
        try {
            let data = new FormData();

            data.append('image', {
                //@ts-ignore
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
            });
            data.append('category', JSON.stringify(category));

            const res = await ApiDeliveryWithImage.put<ResponseAPIDelivery>('/categories/updateWithImage', data);
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR AL ELIMINAR CATEGORY: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async remove(id: string): Promise<ResponseAPIDelivery> {
        try {
            const res = await ApiDelivery.delete<ResponseAPIDelivery>(`/categories/delete/${id}`);
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR AL ELIMINAR CATEGORY: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
}