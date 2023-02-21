import React from 'react';
import { CategoryRepositoryImp } from '../../../data/repositories/CategoryRepository';
import { Category } from '../../entities/Category';
import * as ImagePicker from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker';

const { updateWithImage } = new CategoryRepositoryImp();
export const UpdateWithImageCategoryCase = async (category: Category, file: ImageInfo) => {
    return await updateWithImage(category, file);
}
