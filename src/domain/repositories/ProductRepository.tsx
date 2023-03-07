import { ResponseAPIDelivery } from '../../data/sources/remote/models/ResponseApiDelivery';
import { Product } from '../entities/Product';
import * as ImagePicker from 'expo-image-picker';
export interface ProductRepository {
    create(product: Product, files: ImagePicker.ImageInfo[]): Promise<ResponseAPIDelivery>;
    getProductByCategory(id_category: string): Promise<Product[]>;
    update(product: Product): Promise<ResponseAPIDelivery>;
    updateWithImage(product: Product, files: ImagePicker.ImageInfo[]): Promise<ResponseAPIDelivery>;
    remove(product: Product): Promise<ResponseAPIDelivery>;
}