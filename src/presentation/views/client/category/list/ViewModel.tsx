import React, { useState, useEffect } from 'react';
import { GetAllCategoryCase } from '../../../../../domain/useCases/category/GetAllCategory';
import { Category } from '../../../../../domain/entities/Category';

const ClientViewModel = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    const getCategories = async () => {
        const result = await GetAllCategoryCase();
        setCategories(result);
    }

    return {
        categories,
        getCategories
    }
}


export default ClientViewModel;