import React from 'react'
import { UserRepositoryImpl } from '../../../data/repositories/UserRepository';

const { getDelivery } = new UserRepositoryImpl();
export const GetDeliveryUserUseCase = async () => {
    return await getDelivery();
}
