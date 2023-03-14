import { Order } from '../../domain/entities/Order';
import { OrderRepository } from '../../domain/repositories/OrderRepository';
import { ApiDelivery } from '../sources/remote/api/ApiDelivery';
import { ResponseAPIDelivery } from '../sources/remote/models/ResponseApiDelivery';
import { AxiosError } from 'axios';

export class OrderRepositoryImpl implements OrderRepository {
    async create(order: Order): Promise<ResponseAPIDelivery> {
        try {
            const res = await ApiDelivery.post<ResponseAPIDelivery>('/orders/create', order);

            return Promise.resolve(res.data)
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR AL EJECUTAR CREATE ORDER: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async getByStatus(status: string): Promise<Order[]> {
        try {
            const res = await ApiDelivery.get<Order[]>(`/orders/findByStatus/${status}`);
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR AL EJECUTAR CREATE ORDER: ', JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }
}