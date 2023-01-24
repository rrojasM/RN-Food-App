import React from 'react';
import { removeUserLocalUseCase } from '../../../../domain/useCases/userLocal/RemoveUserLocal';


const ViewModel = () => {
    const removeSession = async () => {
        await removeUserLocalUseCase();
    }
    return {
        removeSession
    }
}


export default ViewModel;
