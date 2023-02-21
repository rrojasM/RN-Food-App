import React, { createContext, useState, useEffect } from "react";
import { User } from "../../domain/entities/User";
import { saveUserLocalUseCase } from "../../domain/useCases/userLocal/SaveUserLocal";
import { getUserLocalUseCase } from "../../domain/useCases/userLocal/GetUserLocal";
import { removeUserLocalUseCase } from "../../domain/useCases/userLocal/RemoveUserLocal";

export const userInitialState: User = {
    id: '',
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: '',
    session_token: '',
    roles: [],
}


export interface userContextProps {
    user: User;
    saveUserSession: (user: User) => Promise<void>;
    getUserSession: () => Promise<void>;
    removeUserSession: () => Promise<void>;
}

export const UserContext = createContext({} as userContextProps);

export const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState(userInitialState);

    useEffect(() => {
        getUserSession();
    }, []);

    const saveUserSession = async (user: User) => {
        await saveUserLocalUseCase(user);
        setUser(user);
    }

    const getUserSession = async () => {
        const user = await getUserLocalUseCase();
        setUser(user);
    }

    const removeUserSession = async () => {
        await removeUserLocalUseCase();
        setUser(userInitialState);
    }


    return (
        <UserContext.Provider value={{
            user,
            saveUserSession,
            getUserSession,
            removeUserSession
        }}>
            {children}
        </UserContext.Provider>
    )
}