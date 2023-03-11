import { ResponseAPIDelivery } from '../../data/sources/remote/models/ResponseApiDelivery';
import { Address } from '../entities/Address';
export interface AddressRepository {
    create(address: Address): Promise<ResponseAPIDelivery>;
    getByUser(id_user: string): Promise<Address[]>;
}