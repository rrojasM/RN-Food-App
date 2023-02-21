import React from 'react';
import { CategoryRepositoryImp } from '../../../data/repositories/CategoryRepository';
import { Category } from '../../entities/Category';
import * as ImagePicker from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker';

const { create } = new CategoryRepositoryImp();
export const CreateCategoryCase = async (category: Category, file: ImageInfo) => {
    return await create(category, file);
}
