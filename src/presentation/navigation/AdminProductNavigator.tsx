import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Category } from '../../domain/entities/Category';
import { AdminProductListScreen } from '../views/admin/product/list/ProductList';
import { StackScreenProps } from '@react-navigation/stack';
import { CategoryStackParamList } from './AdminCategoryNavigator';
import { AdminProductCreateScreen } from '../views/admin/product/create/ProductCreate';
import { ProductProvider } from '../context/ProductContext';


export type ProductStackParamList = {
    AdminProductListScreen: { category: Category },
    AdminProductCreateScreen: { category: Category },
}
const Stack = createNativeStackNavigator<ProductStackParamList>();

interface Props extends StackScreenProps<CategoryStackParamList, 'AdminProductNavigator'> { };

export const AdminProductNavigator = ({ navigation, route }: Props) => {
    return (
        <ProductState>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name='AdminProductListScreen'
                    component={AdminProductListScreen}
                    initialParams={{ category: route.params.category }}

                    options={({ route, navigation }) => (
                        {
                            title: 'Productos',
                            tabBarLabel: 'Productos',
                            headerShown: true,
                            tabBarIcon: ({ color }) => (
                                <Image
                                    source={require('../../assets/list.png')}
                                    style={{ width: 25, height: 25 }}
                                />
                            ),
                            headerRight: () => (
                                <TouchableOpacity onPress={() => navigation.navigate('AdminProductCreateScreen')}>
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
                    name='AdminProductCreateScreen'
                    component={AdminProductCreateScreen}
                    initialParams={{ category: route.params.category }}
                    options={{
                        title: 'Nuevo Producto',
                        headerShown: true
                    }}
                />

            </Stack.Navigator>
        </ProductState>
    )
}


const ProductState = ({ children }: any) => {
    return (
        <ProductProvider>
            {children}
        </ProductProvider>
    )
}