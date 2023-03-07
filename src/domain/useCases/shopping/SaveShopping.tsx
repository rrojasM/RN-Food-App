import React from 'react';
import { ShoppingRepositoryImpl } from "../../../data/repositories/ShoppingRepository";
import { Product } from '../../entities/Product';

const { save } = new ShoppingRepositoryImpl();

export const SaveShoppingUseCase = async (products: Product[]) => {
    return await save(products);
}