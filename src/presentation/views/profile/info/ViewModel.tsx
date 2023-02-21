import React, { useContext } from 'react';
import { removeUserLocalUseCase } from '../../../../domain/useCases/userLocal/RemoveUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';
import { UserContext } from '../../../context/UserContext';


const ViewModel = () => {
    const { user, removeUserSession } = useContext(UserContext);

    /*   const removeSession = async () => {
          await removeUserLocalUseCase();
      } */

    return {
        //removeSession,
        removeUserSession,
        user
    }
}


export default ViewModel;
