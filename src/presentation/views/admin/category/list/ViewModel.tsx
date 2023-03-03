import React, { useState, useEffect, useContext } from 'react'
import { Category } from '../../../../../domain/entities/Category';
import { GetAllCategoryCase } from '../../../../../domain/useCases/category/GetAllCategory';
import { DeleteCategoryCase } from '../../../../../domain/useCases/category/DeleteCategory';
import { CategoryContext } from '../../../../context/CategoryContext';

const AdminCategoryViewModel = () => {
    //const [categories, setCategories] = useState<Category[]>([]);
    const [responseMessage, setResponseMessage] = useState('');
    const { categories, remove, getAll } = useContext(CategoryContext);

    /* const getCategory = async () => {
        const result = await GetAllCategoryCase();
        setCategories(result);
    } */

    const deleteCategory = async (idCategory: string) => {
        const result = await remove(idCategory);
        setResponseMessage(result.message);
        /* 
                if (result.success) {
                    getCategory();
                } */
    }
    return {
        categories,
        getAll,
        responseMessage,
        deleteCategory
    }
}


export default AdminCategoryViewModel;
