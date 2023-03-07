import { Product } from '../entities/Product';
export interface ShoppingRepository {
    save(products: Product[]): Promise<void>;
    getShopping(): Promise<Product[]>;
}