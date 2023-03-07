import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigation/ClientStackNavigator';
import styles from './Styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import useViewModel from './ViewModel'
import { currencyFormat } from '../../../../utils/CurrencyFormat';
import Button from '../../../../components/Button';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientProductDetail'> { };

const ClientProductDetail = ({ navigation, route }: Props) => {

    const { product } = route.params;
    const { productImages, quantity, price, addItem, removeItem, shoppingProducts, addCart } = useViewModel(product);
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    /* const [mode, setMode] = useState<any>('horizontal-stack');
    const [snapDirection, setSnapDirection] = useState<'left' | 'right'>('left'); */

    return (
        <View style={styles.container}>

            <GestureHandlerRootView>
                <Carousel
                    loop={false}
                    width={width}
                    //height={height / 1.5}
                    height={height}
                    autoPlay={false}
                    data={productImages}
                    autoPlayInterval={10000}
                    scrollAnimationDuration={1000}
                    /* onSnapToItem={(index) => console.log('CURRENT INDEX', index)} */

                    renderItem={({ item }) => <Image style={styles.productImage} source={{ uri: item }} />}

                /* modeConfig={{ snapDirection, stackInterval: 30 }}
                mode={mode} */
                />

            </GestureHandlerRootView>
            <View style={styles.productDetail}>
                <View style={styles.productInfo}>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.divider} />

                    <Text style={styles.titleDesc}>Descripción</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <View style={styles.divider} />

                    <Text style={styles.titleDesc}>Precio</Text>
                    <Text style={styles.description}>{currencyFormat(product.price)}</Text>
                    <View style={styles.divider} />

                    <Text style={styles.titleDesc}>Tu orden</Text>
                    <Text style={styles.description}>Cantidad: {quantity} </Text>
                    <Text style={styles.description}>Precio Total: {currencyFormat(price)} </Text>
                    <View style={styles.divider} />
                </View>

                {/* ACTIONS ADD OR REMOVE */}
                <View style={styles.productActions}>
                    <TouchableOpacity onPress={() => removeItem()} style={styles.actionLess}>
                        <Text style={styles.actionText}>-</Text>
                    </TouchableOpacity>
                    <View style={styles.quantity}>
                        <Text style={styles.actionText}>{quantity}</Text>
                    </View>
                    <TouchableOpacity onPress={() => addItem()} style={styles.actionMore}>
                        <Text style={styles.actionText}>+</Text>
                    </TouchableOpacity>

                    <View style={styles.buttonAdd}>
                        <Button text='AGREGAR' onPress={() => addCart()} />
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.pop()} style={styles.back}>
                <Image source={require('../../../../../assets/back.png')} style={styles.backImage} />
            </TouchableOpacity>
        </View>
    )
}

export default ClientProductDetail;
