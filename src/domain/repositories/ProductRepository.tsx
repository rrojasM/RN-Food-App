import { ResponseAPIDelivery } from '../../data/sources/remote/models/ResponseApiDelivery';
import { Product } from '../entities/Product';
import * as ImagePicker from 'expo-image-picker';
export interface ProductRepository {
    create(product: Product, files: ImagePicker.ImageInfo[]): Promise<ResponseAPIDelivery>;
}