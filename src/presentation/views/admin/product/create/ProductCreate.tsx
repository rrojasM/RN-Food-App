import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, ToastAndroid, ScrollView } from 'react-native';
import styles from './Styles';
import CustomTextInput from '../../../../components/CustomTextInput';
import useViewModel from './ViewModel';
import Button from '../../../../components/Button';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import { MyColors } from '../../../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackParamList } from '../../../../navigation/AdminProductNavigator';
import { ModalPickMultiImage } from '../../../../components/ModalPickMultiImage';

interface Props extends StackScreenProps<ProductStackParamList, 'AdminProductCreateScreen'> { };

export const AdminProductCreateScreen = ({ navigation, route }: Props) => {
    const { category } = route.params;

    const { name, description, price, image1, image2, image3, idCategory, onChange, pickImage, loading, resMessage, createProduct } = useViewModel(category);
    const [modalVisible, setModalVisible] = useState(false);
    const [numberImage, setNumberImage] = useState(1);

    useEffect(() => {
        if (resMessage !== '') {
            ToastAndroid.show(resMessage, ToastAndroid.LONG);
        }
    }, [resMessage])


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={() => {
                    setNumberImage(1);
                    setModalVisible(true);
                }}>
                    {
                        image1 == ''
                            ? <Image style={styles.image} source={require('../../../../../assets/image_new.png')} />
                            : <Image style={styles.image} source={{ uri: image1 }} />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setNumberImage(2);
                    setModalVisible(true);
                }}>
                    {
                        image2 == ''
                            ? <Image style={styles.image} source={require('../../../../../assets/image_new.png')} />
                            : <Image style={styles.image} source={{ uri: image2 }} />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setNumberImage(3);
                    setModalVisible(true);
                }}>
                    {
                        image3 == ''
                            ? <Image style={styles.image} source={require('../../../../../assets/image_new.png')} />
                            : <Image style={styles.image} source={{ uri: image3 }} />
                    }
                </TouchableOpacity>
            </View>


            <View style={styles.form}>
                <ScrollView>

                    <View style={styles.categoryInfo}>
                        <Image style={styles.imageCategory} source={require('../../../../../assets/menu.png')} />
                        <Text style={styles.textCategory}>Categoria Seleccionada:</Text>
                        <Text>{category.name}</Text>
                    </View>

                    <CustomTextInput
                        placeholder='Nombre Producto'
                        image={require('../../../../../assets/categories.png')}
                        keyboardType='default'
                        property='name'
                        value={name}
                        onChangeText={onChange}
                    />
                    <CustomTextInput
                        placeholder='Descripción'
                        image={require('../../../../../assets/description.png')}
                        keyboardType='default'
                        property='description'
                        value={description}
                        onChangeText={onChange}
                    />
                    <CustomTextInput
                        placeholder='Precio'
                        image={require('../../../../../assets/price.png')}
                        keyboardType='numeric'
                        property='price'
                        value={price}
                        onChangeText={onChange}
                    />

                    <View style={styles.buttonContainer}>
                        <Button
                            text='CREAR PRODUCTO'
                            onPress={() => createProduct()}
                        />
                    </View>

                </ScrollView>

            </View>

            <ModalPickMultiImage
                openGallery={pickImage}
                //openCamara={takePhoto}
                modalUseState={modalVisible}
                setModalUseState={setModalVisible}
                numberImage={numberImage}
            />
            {
                loading && <ActivityIndicator style={styles.loading} size="large" color={MyColors.primary} />
            }

        </View>
    )
}
