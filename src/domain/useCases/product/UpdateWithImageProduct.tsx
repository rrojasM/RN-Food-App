import React from 'react';
import { ProductRepositoryImpl } from "../../../data/repositories/ProductRepository";
import { Product } from '../../entities/Product';
import * as ImagePicker from 'expo-image-picker';

const { updateWithImage } = new ProductRepositoryImpl();

export const UpdateWithImageProductUseCase = async (product: Product, files: ImagePicker.ImageInfo[]) => {
    return await updateWithImage(product, files);
}
