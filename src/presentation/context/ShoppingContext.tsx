import { createContext, useState, useEffect } from 'react';
import { Product } from '../../domain/entities/Product';
import { SaveShoppingUseCase } from '../../domain/useCases/shopping/SaveShopping';
import { GetShoppingUseCase } from '../../domain/useCases/shopping/GetShopping';
export interface ShoppingContextProps {
    shoppingProducts: Product[],
    total: number,
    getShoppingProducts(): Promise<void>,
    getTotal(): Promise<void>,
    saveItem(product: Product): Promise<void>,
    deleteItem(product: Product): Promise<void>,
}

export const ShoppingContext = createContext({} as ShoppingContextProps);

export const ShoppingProvider = ({ children }: any) => {
    const [shoppingProducts, setShoppingProducts] = useState<Product[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getShoppingProducts();
    }, []);

    useEffect(() => {
        getTotal();
    }, [shoppingProducts]);

    const getShoppingProducts = async (): Promise<void> => {
        const result = await GetShoppingUseCase();
        setShoppingProducts(result);
    }

    const getTotal = async (): Promise<void> => {
        setTotal(0);
        let totalPrice = 0;

        shoppingProducts.forEach(product => {
            totalPrice = totalPrice + (product.quantity * product.price);
        });
        setTotal(totalPrice);
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
        //getTotal();
    }

    const deleteItem = async (product: Product): Promise<void> => {
        const index = shoppingProducts.findIndex((p) => p.id === product.id);
        console.log('INDEX DELETE ITEM SHOPPING CONTEXT', index);
        //shoppingProducts.splice(index, 1);
        shoppingProducts.splice(index);
        await SaveShoppingUseCase(shoppingProducts);
        getShoppingProducts();;
        //getTotal();
    }

    return (
        <ShoppingContext.Provider value={{ shoppingProducts, getShoppingProducts, saveItem, deleteItem, total, getTotal }}>
            {children}
        </ShoppingContext.Provider>
    )

}