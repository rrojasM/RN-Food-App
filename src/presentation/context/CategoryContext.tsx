import React, { createContext, useState, useEffect } from 'react'
import { ImageInfo } from 'expo-image-picker';
import { Category } from '../../domain/entities/Category';
import { ResponseAPIDelivery } from '../../data/sources/remote/models/ResponseApiDelivery';
import * as ImagePicker from 'expo-image-picker';

import { GetAllCategoryCase } from '../../domain/useCases/category/GetAllCategory';
import { CreateCategoryCase } from '../../domain/useCases/category/CreateCategory';
import { UpdateCategoryCase } from '../../domain/useCases/category/UpdateCategory';
import { UpdateWithImageCategoryCase } from '../../domain/useCases/category/UpdateWithImageCategory';
import { DeleteCategoryCase } from '../../domain/useCases/category/DeleteCategory';

export interface CategoryContextProps {
    categories: Category[],
    getAll(): Promise<void>,
    create(category: Category, file: ImageInfo): Promise<ResponseAPIDelivery>,
    update(category: Category): Promise<ResponseAPIDelivery>,
    updateWithImage(category: Category, file: ImagePicker.ImageInfo): Promise<ResponseAPIDelivery>,
    remove(id: string): Promise<ResponseAPIDelivery>,
}

export const CategoryContext = createContext({} as CategoryContextProps);

export const CategoryProvider = ({ children }: any) => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        if (categories.length === 0) {
            getAll();
        }
    }, []);

    const getAll = async () => {
        const result = await GetAllCategoryCase();
        setCategories(result);
    }

    const create = async (category: Category, file: ImageInfo) => {
        const res = await CreateCategoryCase(category, file);
        getAll();
        return res;
    }

    const update = async (category: Category) => {
        const res = await UpdateCategoryCase(category);
        getAll();
        return res;
    }

    const updateWithImage = async (category: Category, file: ImagePicker.ImageInfo) => {
        const res = await UpdateWithImageCategoryCase(category, file);
        getAll();
        return res;
    }

    const remove = async (id: string) => {
        const res = await DeleteCategoryCase(id);
        getAll();
        return res;
    }

    return (

        <CategoryContext.Provider value={{
            categories,
            getAll,
            create,
            update,
            updateWithImage,
            remove
        }}>
            {children}
        </CategoryContext.Provider>
    )
}