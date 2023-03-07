import { createContext, useState, useEffect } from 'react';
import { Product } from '../../domain/entities/Product';
import { SaveShoppingUseCase } from '../../domain/useCases/shopping/SaveShopping';
import { GetShoppingUseCase } from '../../domain/useCases/shopping/GetShopping';
export interface ShoppingContextProps {
    shoppingProducts: Product[],
    getShoppingProducts(): Promise<void>,
    saveItem(product: Product): Promise<void>,
    removeItem(product: Product): Promise<void>,
}

export const ShoppingContext = createContext({} as ShoppingContextProps);

export const ShoppingProvider = ({ children }: any) => {
    const [shoppingProducts, setShoppingProducts] = useState<Product[]>([]);

    useEffect(() => {
        getShoppingProducts();
    }, []);

    const getShoppingProducts = async (): Promise<void> => {
        const result = await GetShoppingUseCase();
        setShoppingProducts(result);
    }

    const saveItem = async (product: Product): Promise<void> => {
        const index = shoppingProducts.findIndex((p) => p.id === product.id);
        if (index === -1) {//PRODUCTO NO AGREGADO AL CARRITO
            shoppingProducts.push(product);
        } else {//PRODUCTO YA AGREGADO AL CARRITO SOLO SE REQUIERE ACTUALIZAR
            shoppingProducts[index].quantity = product.quantity;
        }

        await SaveShoppingUseCase(shoppingProducts);
        getShoppingProducts();
    }

    const removeItem = async (product: Product): Promise<void> => {
        const index = shoppingProducts.findIndex((p) => p.id === product.id);
        shoppingProducts.splice(index);
        await SaveShoppingUseCase(shoppingProducts);
        getShoppingProducts();

    }

    return (
        <ShoppingContext.Provider value={{ shoppingProducts, getShoppingProducts, saveItem, removeItem }}>
            {children}
        </ShoppingContext.Provider>
    )

}