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
}