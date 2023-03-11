import { AddressRepositoryImpl } from "../../../data/repositories/AddressRepository";
import { Address } from '../../entities/Address';

const { create } = new AddressRepositoryImpl();

export const CreateAddressUseCase = async (address: Address) => {
    return await create(address);
}

