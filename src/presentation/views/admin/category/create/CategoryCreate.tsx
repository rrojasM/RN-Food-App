import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, ToastAndroid } from 'react-native';
import styles from './Styles';
import CustomTextInput from '../../../../components/CustomTextInput';
import useViewModel from './ViewModel';
import Button from '../../../../components/Button';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import { MyColors } from '../../../../theme/AppTheme';

export const AdminCategoryCreateScreen = () => {

    const { name, description, image, onChange, takePhoto, pickImage, loading, resMessage, createCategory } = useViewModel();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (resMessage !== '') {
            ToastAndroid.show(resMessage, ToastAndroid.LONG);
        }
    }, [resMessage])


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer} onPress={() => setModalVisible(true)}>
                {
                    image == ''
                        ? <Image style={styles.image} source={require('../../../../../assets/image_new.png')} />
                        : <Image style={styles.image} source={{ uri: image }} />
                }
            </TouchableOpacity>

            <View style={styles.form}>
                <CustomTextInput
                    placeholder='Nombre de la categoria'
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
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    text='CREAR CATEGORIA'
                    onPress={() => createCategory()}
                />
            </View>


            <ModalPickImage
                openGallery={pickImage}
                openCamara={takePhoto}
                modalUseState={modalVisible}
                setModalUseState={setModalVisible}
            />
            {
                loading && <ActivityIndicator style={styles.loading} size="large" color={MyColors.primary} />
            }

        </View>
    )
}
