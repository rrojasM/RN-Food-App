import { createContext } from "react";
import { ResponseAPIDelivery } from '../../data/sources/remote/models/ResponseApiDelivery';
import { Product } from '../../domain/entities/Product';
import * as ImagePicker from 'expo-image-picker';
import { CreateProductUseCase } from "../../domain/useCases/product/CreateProduct";

export interface ProductContextProps {
    create(product: Product, files: ImagePicker.ImageInfo[]): Promise<ResponseAPIDelivery>
}

export const ProductContext = createContext({} as ProductContextProps);


export const ProductProvider = ({ children }: any) => {

    const create = async (product: Product, files: ImagePicker.ImageInfo[]): Promise<ResponseAPIDelivery> => {
        const res = await CreateProductUseCase(product, files);
        return res;
    }

    return (
        <ProductContext.Provider value={{
            create
        }}>
            {children}
        </ProductContext.Provider>
    )
}