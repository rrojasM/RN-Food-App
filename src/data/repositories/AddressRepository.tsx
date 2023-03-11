import { AxiosError } from "axios";
import { Address } from "../../domain/entities/Address";
import { AddressRepository } from "../../domain/repositories/AddressRepository";
import { ResponseAPIDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";

export class AddressRepositoryImpl implements AddressRepository {
    async create(address: Address): Promise<ResponseAPIDelivery> {
        try {
            const res = await ApiDelivery.post<ResponseAPIDelivery>('/address/create', address);
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR AL CREAR UNA DIRECCIÓN: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async getByUser(id_user: string): Promise<Address[]> {
        try {
            const res = await ApiDelivery.get<Address[]>(`/address/findByUser/${id_user}`);
            return Promise.resolve(res.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR AL OBTENER LA DIRECCIONES: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }
}