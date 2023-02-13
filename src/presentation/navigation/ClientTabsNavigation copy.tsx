import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import ClientCategoryListScreen from '../views/client/category/list/CategoryList';
import ClientOrderListScreen from '../views/client/order/list/OrderList';

const Tab = createBottomTabNavigator();

export const ClientTabsNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='ClientCategoryList' component={ClientCategoryListScreen} />
            <Tab.Screen name='ClientOrderList' component={ClientOrderListScreen} />
            <Tab.Screen name='ProfileInfo' component={ProfileInfoScreen} />


        </Tab.Navigator>
    )
}