import { Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClientCategoryListScreen from '../views/client/category/list/CategoryList';
import ClientProductListScreen from '../views/client/product/list/ProductList';
import ClientProductDetail from "../views/client/product/detail/ProductDetail";
import { Product } from '../../domain/entities/Product';
import { ShoppingProvider } from "../context/ShoppingContext";
import ClientShoppingCartScreen from "../views/client/cart/ShoppingCart";
import AddressListScreen from "../views/client/address/list/AddressList";
import { AddressCreateScreen } from "../views/client/address/create/AddressCreate";

export type ClientStackParamList = {
    ClientCategoryListScreen: undefined,
    ClientProductListScreen: { id_category: string },
    ClientProductDetail: { product: Product },
    ClientShoppingCartScreen: undefined,
    AddressListScreen: undefined,
    AddressCreateScreen: undefined
}

const Stack = createNativeStackNavigator<ClientStackParamList>();

export const ClientStackNavigator = () => {
    return (
        <ShoppingState>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name='ClientCategoryListScreen'
                    component={ClientCategoryListScreen}
                    options={({ route, navigation }) => (
                        {
                            title: 'Categorias',
                            headerShown: true,
                            headerRight: () => (
                                <TouchableOpacity onPress={() => navigation.navigate('ClientShoppingCartScreen')}>
                                    <Image
                                        source={require('../../assets/shopping_cart.png')}
                                        style={{ width: 35, height: 35, marginRight: 0 }}
                                    />
                                </TouchableOpacity>
                            )
                        }
                    )}
                />

                <Stack.Screen
                    name='ClientProductListScreen'
                    component={ClientProductListScreen}
                    options={({ route, navigation }) => (
                        {
                            title: 'Productos',
                            headerShown: true,
                            headerRight: () => (
                                <TouchableOpacity onPress={() => navigation.navigate('ClientShoppingCartScreen')}>
                                    <Image
                                        source={require('../../assets/shopping_cart.png')}
                                        style={{ width: 35, height: 35, marginRight: 0 }}
                                    />
                                </TouchableOpacity>
                            )
                        }
                    )}
                />

                <Stack.Screen
                    name='ClientProductDetail'
                    component={ClientProductDetail}
                />

                <Stack.Screen
                    name='ClientShoppingCartScreen'
                    component={ClientShoppingCartScreen}
                    options={{
                        title: 'Mi Orden',
                        headerShown: true,
                    }}
                />

                <Stack.Screen
                    name='AddressListScreen'
                    component={AddressListScreen}
                    options={({ route, navigation }) => (
                        {
                            title: 'Mis Direcciones',
                            headerShown: true,
                            headerRight: () => (
                                <TouchableOpacity onPress={() => navigation.navigate('AddressCreateScreen')}>
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
                    name='AddressCreateScreen'
                    component={AddressCreateScreen}
                    options={{
                        title: 'Nueva dirección',
                        headerShown: true,
                    }}
                />
            </Stack.Navigator>
        </ShoppingState>
    )
}

const ShoppingState = ({ children }: any) => {
    return (
        <ShoppingProvider>
            {children}
        </ShoppingProvider>
    )
}