import React, { useState, useEffect } from 'react'
import { FlatList, Image, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './Styles';
import useViewModel from './ViewModel';
import { StackScreenProps } from '@react-navigation/stack';
import { OrderStackParamList } from '../../../../navigation/AdminOrderNavigator';
import OrderDetailItem from './Item';
import { DateFormat } from '../../../../utils/DateFormat';
import { currencyFormat } from '../../../../utils/CurrencyFormat';
import Button from '../../../../components/Button';

interface Props extends StackScreenProps<OrderStackParamList, 'AdminOrderDetail'> { };

const AdminOrderDetail = ({ navigation, route }: Props) => {
    const { order } = route.params;
    const { total, getTotal, deliveries, getDeliveries, open, value, items, setOpen, setValue, setItems, dispatchOrder } = useViewModel(order);

    useEffect(() => {
        getDeliveries();
    }, []);

    return (
        <View>
            <View style={styles.products}>
                <FlatList
                    data={order.products}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <OrderDetailItem product={item} />}
                />
            </View>
            <View style={styles.info}>
                <View style={styles.infoRow}>
                    <View style={styles.infoText}>
                        <Text style={styles.infoTitle}>Fecha del pedido</Text>
                        <Text style={styles.infoDesc}>{DateFormat(order.timestamp!)}</Text>
                    </View>
                    <Image source={require('../../../../../assets/reloj.png')} style={styles.infoImage} />
                </View>
                <View style={styles.infoRow}>
                    <View style={styles.infoText}>
                        <Text style={styles.infoTitle}>Cliente - Telefono</Text>
                        <Text style={styles.infoDesc}>{order.client.name} {order.client.lastname} - {order.client.phone}</Text>
                    </View>
                    <Image source={require('../../../../../assets/user.png')} style={styles.infoImage} />
                </View>
                <View style={styles.infoRow}>
                    <View style={styles.infoText}>
                        <Text style={styles.infoTitle}>Dirección de entrega</Text>
                        <Text style={styles.infoDesc}>{order.address.address} {order.address.location}</Text>
                    </View>
                    <Image source={require('../../../../../assets/location.png')} style={styles.infoImage} />
                </View>

                <Text style={styles.deliveries}>REPARTIDORES DISPONIBLES</Text>

                <View style={styles.dropDawn}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>

                <View style={styles.totalInfo}>
                    <Text style={styles.total}>TOTAL: {currencyFormat(total)}</Text>
                    <View style={styles.button}>
                        <Button text='DESPACHAR ORDEN' onPress={() => dispatchOrder()} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AdminOrderDetail;