import { AddressRepositoryImpl } from "../../../data/repositories/AddressRepository";
const { getByUser } = new AddressRepositoryImpl();

export const GetAddressByUserUseCase = async (id_user: string) => {
    return await getByUser(id_user);
}

