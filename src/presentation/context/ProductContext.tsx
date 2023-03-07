import { createContext, useState } from "react";
import { ResponseAPIDelivery } from '../../data/sources/remote/models/ResponseApiDelivery';
import { Product } from '../../domain/entities/Product';
import * as ImagePicker from 'expo-image-picker';
import { CreateProductUseCase } from "../../domain/useCases/product/CreateProduct";
import { GetProductsByCategoryUseCase } from '../../domain/useCases/product/GetProductsByCategory';
import { DeleteProductUseCase } from '../../domain/useCases/product/DeleteProduct';
import { UpdateWithImageProductUseCase } from '../../domain/useCases/product/UpdateWithImageProduct';
import { UpdateProductUseCase } from '../../domain/useCases/product/UpdateProduct';
export interface ProductContextProps {
    products: Product[],
    create(product: Product, files: ImagePicker.ImageInfo[]): Promise<ResponseAPIDelivery>,
    getProducts(id_category: string): Promise<void>,
    updateWithImage(product: Product, files: ImagePicker.ImageInfo[]): Promise<ResponseAPIDelivery>,
    update(product: Product): Promise<ResponseAPIDelivery>,
    remove(product: Product): Promise<ResponseAPIDelivery>;

}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({ children }: any) => {
    const [products, setProducts] = useState<Product[]>([]);

    const create = async (product: Product, files: ImagePicker.ImageInfo[]): Promise<ResponseAPIDelivery> => {
        const res = await CreateProductUseCase(product, files);
        getProducts(product.id_category);
        return res;
    }

    const getProducts = async (id_category: string): Promise<void> => {
        const result = await GetProductsByCategoryUseCase(id_category);
        setProducts(result);
    }
    const updateWithImage = async (product: Product, files: ImagePicker.ImageInfo[]): Promise<ResponseAPIDelivery> => {
        const res = await UpdateWithImageProductUseCase(product, files);
        getProducts(product.id_category)
        return res;
    }

    const update = async (product: Product): Promise<ResponseAPIDelivery> => {
        const res = await UpdateProductUseCase(product);
        getProducts(product.id_category);
        return res;
    }


    const remove = async (product: Product): Promise<ResponseAPIDelivery> => {
        const res = await DeleteProductUseCase(product);
        getProducts(product.id_category);
        return res;
    }

    return (
        <ProductContext.Provider value={{
            products,
            create,
            getProducts,
            remove,
            update,
            updateWithImage
        }}>
            {children}
        </ProductContext.Provider>
    )
}