import React from 'react';
import { CategoryRepositoryImp } from '../../../data/repositories/CategoryRepository';
import { Category } from '../../entities/Category';

const { remove } = new CategoryRepositoryImp();

const { create } = new CategoryRepositoryImp();
export const DeleteCategoryCase = async (id: string) => {
    return await remove(id);
}
