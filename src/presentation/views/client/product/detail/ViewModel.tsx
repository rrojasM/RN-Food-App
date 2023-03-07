import React, { useState, useEffect } from 'react';
import { Product } from '../../../../../domain/entities/Product';

const ProductDetailViewModel = (product: Product) => {
    const productImages: string[] = [
        product.image1,
        product.image2,
        product.image3
    ]
    return {
        productImages
    }
}

export default ProductDetailViewModel;
