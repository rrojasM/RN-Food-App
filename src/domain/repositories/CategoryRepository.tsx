import { ResponseAPIDelivery } from '../../data/sources/remote/models/ResponseApiDelivery';
import { Category } from '../entities/Category';
import * as ImagePicker from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker';
export interface CategoryRepository {
    getAll(): Promise<Category[]>;
    create(category: Category, file: ImageInfo): Promise<ResponseAPIDelivery>;
    update(category: Category): Promise<ResponseAPIDelivery>;
    updateWithImage(category: Category, file: ImagePicker.ImageInfo): Promise<ResponseAPIDelivery>;
    remove(id: string): Promise<ResponseAPIDelivery>;
}