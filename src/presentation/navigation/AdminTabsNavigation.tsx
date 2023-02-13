import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminCategoryListScreen from '../views/admin/category/list/CategoryList';
import AdminOrderListScreen from '../views/admin/order/list/OrderList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';

const Tab = createBottomTabNavigator();

export const AdminTabsNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='AdminCategoryList' component={AdminCategoryListScreen} />
            <Tab.Screen name='AdminOrderList' component={AdminOrderListScreen} />
            <Tab.Screen name='ProfileInfo' component={ProfileInfoScreen} />


        </Tab.Navigator>
    )
}