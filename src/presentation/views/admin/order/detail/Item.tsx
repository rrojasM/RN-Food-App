import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Product } from '../../../../../domain/entities/Product';
import { currencyFormat } from '../../../../utils/CurrencyFormat';

interface Props {
    product: Product
}

const OrderDetailItem = ({ product }: Props) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image1 }} style={styles.image} />
            <View style={styles.productInfo}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.quantity}>Cantidad: {product.quantity}</Text>
                <Text style={styles.quantity}>Precio: {currencyFormat(product.price)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 30,
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10
    },
    name: {
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 13,
        marginTop: 5
    },
    productInfo: {
        marginLeft: 10
    }
});

export default OrderDetailItem;
