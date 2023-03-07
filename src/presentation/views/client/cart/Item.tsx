import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Product } from '../../../../domain/entities/Product';
import { currencyFormat } from '../../../utils/CurrencyFormat';

interface Props {
    product: Product,
    addItem: (product: Product) => void,
    removeItem: (product: Product) => void,
    deleteItem: (product: Product) => void,
}

export const CartItem = ({ product, addItem, removeItem, deleteItem }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: product.image1 }} style={styles.image} />
            </View>
            <View style={styles.productInfo}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.price}>{currencyFormat(product.quantity * product.price)}</Text>
                </View>
                <View style={styles.productActions}>
                    <View style={styles.actions}>
                        <TouchableOpacity onPress={() => removeItem(product)} style={styles.actionLess}>
                            <Text style={styles.actionText}>-</Text>
                        </TouchableOpacity>
                        <View style={styles.quantity}>
                            <Text style={styles.actionText}>{product.quantity}</Text>
                        </View>
                        <TouchableOpacity onPress={() => addItem(product)} style={styles.actionMore}>
                            <Text style={styles.actionText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => {
                        Alert.alert(
                            "Eliminar producto de la Orden",
                            "Estas seguro de eliminar este producto?",
                            [
                                {
                                    text: "OK",
                                    onPress: () => {
                                        deleteItem(product);
                                    },
                                },
                                {
                                    text: "Cancelar"
                                }
                            ]
                        )

                    }}>
                        <Image source={require('../../../../assets/trash.png')} style={styles.trash} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 10
    },
    imageContainer: {

    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 15
    },
    title: {
        color: 'black',
        fontSize: 14,
        marginLeft: 10,
        flex: 1,
        textTransform: 'uppercase'
    },
    price: {
        marginRight: 40,
        fontWeight: 'bold'
    },
    productInfo: {
        flex: 1
    },
    actionText: {
        color: 'white',
        fontSize: 15
    },
    actionLess: {
        backgroundColor: '#3a3a3a',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    quantity: {
        backgroundColor: '#3a3a3a',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
    },
    actionMore: {
        backgroundColor: '#3a3a3a',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    productActions: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 15,
        marginRight: 45
    },
    actions: {
        flexDirection: 'row',
        flex: 1
    },
    trash: {
        width: 30,
        height: 30
    }
});
