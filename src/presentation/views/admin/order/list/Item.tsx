import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Order } from '../../../../../domain/entities/Order';
import { DateFormat } from '../../../../utils/DateFormat';
import { StackNavigationProp } from '@react-navigation/stack';
import { OrderStackParamList } from '../../../../navigation/AdminOrderNavigator';
interface Props {
    order: Order,
    navigation: StackNavigationProp<OrderStackParamList, 'AdminOrderListScreen', undefined>
}

const OrderListItem = ({ order, navigation }: Props) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('AdminOrderDetail', { order: order })}>
            <View style={styles.container}>
                <Text style={styles.order}>Orden #{order.id}</Text>
                <Text style={[styles.info, { marginTop: 10 }]}>Fecha del pedido: {DateFormat(order.timestamp!)}</Text>
                <Text style={styles.info}>Cliente {order.client.name} {order.client.lastname}</Text>
                <Text style={styles.info}>Entregar en:  {order.address.address} - {order.address.location} </Text>
                <View style={styles.divider} />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    divider: {
        height: 1.5,
        width: '100%',
        backgroundColor: '#e2e2e2',
        marginTop: 10
    },
    order: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginTop: 10,
    },
    info: {
        fontSize: 13,
        textAlign: 'justify'
    }
});

export default OrderListItem;