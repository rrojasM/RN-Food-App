import React from 'react';
import { removeUserLocalUseCase } from '../../../../domain/useCases/userLocal/RemoveUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';


const ViewModel = () => {
    const { user } = useUserLocal();
    const removeSession = async () => {
        await removeUserLocalUseCase();
    }
    return {
        removeSession,
        user
    }
}


export default ViewModel;
