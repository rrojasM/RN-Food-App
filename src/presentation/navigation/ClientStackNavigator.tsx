import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClientCategoryListScreen from '../views/client/category/list/CategoryList';
import ClientProductListScreen from '../views/client/product/list/ProductList';
import ClientProductDetail from "../views/client/product/detail/ProductDetail";
import { Product } from '../../domain/entities/Product';
import { ShoppingProvider } from "../context/ShoppingContext";

export type ClientStackParamList = {
    ClientCategoryListScreen: undefined,
    ClientProductListScreen: { id_category: string },
    ClientProductDetail: { product: Product }
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
                    options={{ headerShown: true, title: 'Categorias' }}
                />

                <Stack.Screen
                    name='ClientProductListScreen'
                    component={ClientProductListScreen}
                    options={{
                        headerShown: true,
                        title: 'Productos'
                    }}
                />

                <Stack.Screen
                    name='ClientProductDetail'
                    component={ClientProductDetail}
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