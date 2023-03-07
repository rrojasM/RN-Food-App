import { Product } from '../../domain/entities/Product';
import { ShoppingRepository } from '../../domain/repositories/ShoppingRepository';
import { LocalStorage } from '../sources/local/LocalStorage';

export class ShoppingRepositoryImpl implements ShoppingRepository {
    async save(products: Product[]): Promise<void> {
        const { save } = LocalStorage();
        await save('shopping_bag', JSON.stringify(products));
    }

    async getShopping(): Promise<Product[]> {
        const { getItem } = LocalStorage();
        const data = await getItem('shopping_bag');
        const shopping: Product[] = JSON.parse(data);

        if (shopping === null) {
            return [];
        } else {
            return shopping;

        }
    }
}