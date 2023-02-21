import React, { useState, useEffect } from 'react'
import { Category } from '../../../../../domain/entities/Category';
import { GetAllCategoryCase } from '../../../../../domain/useCases/category/GetAllCategory';
import { DeleteCategoryCase } from '../../../../../domain/useCases/category/DeleteCategory';

const AdminCategoryViewModel = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [responseMessage, setResponseMessage] = useState('');

    const getCategory = async () => {
        const result = await GetAllCategoryCase();
        setCategories(result);
    }

    const deleteCategory = async (idCategory: string) => {
        const result = await DeleteCategoryCase(idCategory);
        setResponseMessage(result.message);

        if (result.success) {
            getCategory();
        }
    }
    return {
        categories,
        getCategory,
        responseMessage,
        deleteCategory
    }
}


export default AdminCategoryViewModel;
