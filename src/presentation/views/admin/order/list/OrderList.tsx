import React, { useState, useEffect } from 'react';
import { View, Text, useWindowDimensions, Dimensions, FlatList } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import useViewModel from './ViewModel';
import OrderListItem from './Item';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { OrderStackParamList } from '../../../../navigation/AdminOrderNavigator';

interface Props {
    status: string
}

export const AdminOrderViewScreen = ({ status }: Props) => {

    const { orders, getOrders } = useViewModel();
    const navigation = useNavigation<StackNavigationProp<OrderStackParamList, 'AdminOrderListScreen'>>();

    useEffect(() => {
        getOrders(status);
    }, []);

    return (
        <View>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <OrderListItem order={item} navigation={navigation} />}
            />
        </View>
    )
}

const renderScene = ({ route }: any) => {
    switch (route.key) {
        case 'first':
            return <AdminOrderViewScreen status='PAGADO' />;
        case 'second':
            return <AdminOrderViewScreen status='ORDEN LISTA' />;
        case 'third':
            return <AdminOrderViewScreen status='EN CAMINO' />;
        case 'fourth':
            return <AdminOrderViewScreen status='ENTREGADO' />;
        default:
            return <AdminOrderViewScreen status='PAGADO' />;

    }
};

export const AdminOrderListScreen = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'PAGADO' },
        { key: 'second', title: 'ORDEN LISTA' },
        { key: 'third', title: 'EN CAMINO' },
        { key: 'fourth', title: 'ENTREGADO' },

    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props => (<TabBar
                {...props}
                indicatorStyle={{ backgroundColor: 'black' }}
                activeColor='black'
                inactiveColor='#f2f2f2'
                scrollEnabled={true}
                style={{ paddingTop: 30, backgroundColor: '#FFC058', height: 80, alignItems: 'center', justifyContent: 'center', }}
            />)}
        />
    );
}

