import React, { useState, useEffect } from 'react'
import { GetProductsByCategoryUseCase } from '../../../../../domain/useCases/product/GetProductsByCategory';
import { Product } from '../../../../../domain/entities/Product';

const ClientProductViewModel = () => {
    const [products, setProducts] = useState<Product[]>([])

    const getProducts = async (id_category: string) => {
        const result = await GetProductsByCategoryUseCase(id_category);
        setProducts(result);
    }
    return {
        products,
        getProducts
    }
}


export default ClientProductViewModel; 