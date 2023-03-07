import React from 'react';
import { UserProvider } from '../context/UserContext';
import Home from '../views/home/Home';
import Register from '../views/register/Register';
import { User } from '../../domain/entities/User';
import { Category } from '../../domain/entities/Category';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RolesScreen } from '../views/roles/Roles';
import { AdminTabsNavigation } from './AdminTabsNavigation';
import { ClientTabsNavigation } from './ClientTabsNavigator';
import { AdminCategoryCreateScreen } from '../views/admin/category/create/CategoryCreate';
import { AdminCategoryUpdate } from '../views/admin/category/update/CategoryUpdate';
import ProfileUpdate from '../views/profile/update/ProfileUpdate';


export type RootStackParamList = {
    Home: undefined,
    RegisterScreen: undefined,
    //ProfileInfoScreen: undefined,
    RolesScreen: undefined,
    AdminTabsNavigation: undefined,
    ClientTabsNavigation: undefined,
    ProfileUpdateScreen: { user: User },
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
    return (
        <UserState>

            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="RegisterScreen"
                    component={Register}
                    options={{
                        headerShown: true,
                        title: 'Nuevo Usuario'
                    }}
                />

                <Stack.Screen
                    name="RolesScreen"
                    component={RolesScreen}
                    options={{
                        headerShown: true,
                        title: 'Seleciona un Rol'
                    }}
                />

                <Stack.Screen
                    name="AdminTabsNavigation"
                    component={AdminTabsNavigation}
                />

                <Stack.Screen
                    name="ClientTabsNavigation"
                    component={ClientTabsNavigation}
                />

                <Stack.Screen
                    name="ProfileUpdateScreen"
                    component={ProfileUpdate}
                    options={{
                        headerShown: true,
                        title: 'Actualizar Usuario'
                    }}
                />
            </Stack.Navigator>
        </UserState>
    )
}

const UserState = ({ children }: any) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}
