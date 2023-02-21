import React from 'react';
import { CategoryRepositoryImp } from '../../../data/repositories/CategoryRepository';
import { Category } from '../../entities/Category';

const { update } = new CategoryRepositoryImp();
export const UpdateCategoryCase = async (category: Category) => {
    return await update(category);
}
