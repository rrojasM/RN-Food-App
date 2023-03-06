import { ImageInfo } from "expo-image-picker";
import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/repositories/ProductRepository";
import { ResponseAPIDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { AxiosError } from "axios";
import mime from "mime";
import { ApiDeliveryWithImage, ApiDelivery } from "../sources/remote/api/ApiDelivery";

export class ProductRepositoryImpl implements ProductRepository {

    async create(product: Product, files: ImageInfo[]): Promise<ResponseAPIDelivery> {
        try {
            let data = new FormData();

            files.forEach(file => {
                data.append('image', {
                    //@ts-ignore
                    uri: file.uri,
                    name: file.uri.split('/').pop(),
                    type: mime.getType(file.uri)!
                });
            });

            data.append('product', JSON.stringify(product));

            const res = await ApiDeliveryWithImage.post<ResponseAPIDelivery>('/products/create', data);
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR AL EJECUTAR CREATE PRODUCT: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async getProductByCategory(id_category: string): Promise<Product[]> {
        try {
            const res = await ApiDelivery.get<Product[]>(`/products/findByCategory/${id_category}`);
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR AL OBTENER PRODUCTS LIST: ', JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async remove(product: Product): Promise<ResponseAPIDelivery> {
        try {
            const res = await ApiDelivery.delete<ResponseAPIDelivery>(`/products/delete/${product.id}`);
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR AL ELIMINAR PRODUCT: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
}