import React from 'react';
import { ProductRepositoryImpl } from '../../../data/repositories/ProductRepository';
import { Product } from '../../entities/Product';

const { remove } = new ProductRepositoryImpl();
export const DeleteProductUseCase = async (product: Product) => {
    return await remove(product);
}
