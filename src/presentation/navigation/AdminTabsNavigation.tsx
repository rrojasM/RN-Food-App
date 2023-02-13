import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminCategoryListScreen from '../views/admin/category/list/CategoryList';
import AdminOrderListScreen from '../views/admin/order/list/OrderList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { Image } from 'react-native';
const Tab = createBottomTabNavigator();

export const AdminTabsNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='AdminCategoryList'
                component={AdminCategoryListScreen}
                options={{
                    title: 'Categorias',
                    tabBarLabel: 'Categorias',
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={require('../../assets/list.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='AdminOrderList'
                component={AdminOrderListScreen}
                options={{
                    title: 'Pedidos',
                    tabBarLabel: 'Pedidos',
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={require('../../assets/orders.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    )
                }} />
            <Tab.Screen
                name='ProfileInfo'
                component={ProfileInfoScreen}
                options={{
                    title: 'Perfil',
                    tabBarLabel: 'Perfil',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={require('../../assets/user_menu.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    )
                }}
            />


        </Tab.Navigator>
    )
}