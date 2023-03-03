import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Category } from '../../domain/entities/Category';
import { CategoryProvider } from '../context/CategoryContext';
import { AdminCategoryCreateScreen } from '../views/admin/category/create/CategoryCreate';
import { AdminCategoryUpdate } from '../views/admin/category/update/CategoryUpdate';
import AdminCategoryListScreen from '../views/admin/category/list/CategoryList';
import { Image, TouchableOpacity } from 'react-native';
import { AdminProductNavigator } from './AdminProductNavigator';

export type CategoryStackParamList = {
    AdminCategoryListScreen: undefined,
    AdminCategoryCreateScreen: undefined,
    AdminCategoryUpdate: { category: Category }
    AdminProductNavigator: { category: Category }
}

const Stack = createNativeStackNavigator<CategoryStackParamList>();

export const AdminCategoryNavigator = () => {
    return (
        <CategoryState>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="AdminCategoryListScreen"
                    component={AdminCategoryListScreen}

                    options={({ route, navigation }) => (
                        {
                            title: 'Categorias',
                            tabBarLabel: 'Categorias',
                            headerShown: true,
                            tabBarIcon: ({ color }) => (
                                <Image
                                    source={require('../../assets/list.png')}
                                    style={{ width: 25, height: 25 }}
                                />
                            ),
                            headerRight: () => (
                                <TouchableOpacity onPress={() => navigation.navigate('AdminCategoryCreateScreen')}>
                                    <Image
                                        source={require('../../assets/add.png')}
                                        style={{ width: 35, height: 35, marginRight: 0 }}
                                    />
                                </TouchableOpacity>
                            )
                        }
                    )}
                />
                <Stack.Screen
                    name="AdminCategoryCreateScreen"
                    component={AdminCategoryCreateScreen}
                    options={{
                        headerShown: true,
                        title: 'Nueva Categoria'
                    }}
                />
                <Stack.Screen
                    name="AdminCategoryUpdate"
                    component={AdminCategoryUpdate}
                    options={{
                        headerShown: true,
                        title: 'Editar Categoria'
                    }}
                />
                <Stack.Screen
                    name="AdminProductNavigator"
                    component={AdminProductNavigator}
                />
            </Stack.Navigator>
        </CategoryState>
    )
}

const CategoryState = ({ children }: any) => {
    return (
        <CategoryProvider>
            {children}
        </CategoryProvider>
    )
}

