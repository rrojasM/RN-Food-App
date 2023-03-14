import { Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AdminOrderListScreen } from '../views/admin/order/list/OrderList';
import AdminOrderDetail from '../views/admin/order/detail/OrderDetail';
import { Order } from '../../domain/entities/Order';

export type OrderStackParamList = {
    AdminOrderListScreen: undefined,
    AdminOrderDetail: { order: Order }
}

const Stack = createNativeStackNavigator<OrderStackParamList>();

export const AdminOrderNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="AdminOrderListScreen"
                component={AdminOrderListScreen}
            />
            <Stack.Screen
                name="AdminOrderDetail"
                component={AdminOrderDetail}
                options={{
                    headerShown: true,
                    title: 'Detalle Orden'
                }}
            />
        </Stack.Navigator>
    )
}
