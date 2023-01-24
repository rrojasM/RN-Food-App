import React, { useState, useEffect } from 'react';
import { User } from '../../domain/entities/User';
import { getUserLocalUseCase } from '../../domain/useCases/userLocal/GetUserLocal';

export const useUserLocal = () => {
    const [user, setUser] = useState<User>()
    useEffect(() => {
        getUserSession();
    }, []);

    const getUserSession = async () => {
        const user = await getUserLocalUseCase();
        setUser(user);

    }

    return {
        user,
        getUserSession
    }
}

