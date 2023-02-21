import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminCategoryListScreen from '../views/admin/category/list/CategoryList';
import AdminOrderListScreen from '../views/admin/order/list/OrderList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { Image, TouchableOpacity } from 'react-native';
const Tab = createBottomTabNavigator();

export const AdminTabsNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='AdminCategoryList'
                component={AdminCategoryListScreen}
                options={({ route, navigation }) => (
                    {
                        title: 'Categorias',
                        tabBarLabel: 'Categorias',
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
                                    style={{ width: 35, height: 35, marginRight: 15 }}
                                />
                            </TouchableOpacity>
                        )
                    }
                )}
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