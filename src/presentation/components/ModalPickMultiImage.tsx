import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Button from "./Button";

interface Props {
    openGallery: (numberImage: number) => void,
    //openCamara: (numberImage: number) => void,
    numberImage: number,
    modalUseState: boolean,
    setModalUseState: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalPickMultiImage = ({ openGallery, setModalUseState, modalUseState, numberImage }: Props) => {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalUseState}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalUseState(!modalUseState);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Selecciona una opción</Text>
                        <View style={styles.buttonContainer}>
                            <Button
                                text="Galeria"
                                onPress={() => {
                                    openGallery(numberImage)
                                    setModalUseState(false)
                                }}
                            />
                        </View>
                        {/* <View style={styles.buttonContainer}>
                            <Button
                                text="Camara"
                                onPress={() => {
                                    openCamara(numberImage)
                                    setModalUseState(false)
                                }}
                            />
                        </View> */}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: 250,
        height: 220,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        paddingTop: 35,
        paddingLeft: 25,
        paddingRight: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    buttonContainer: {
        width: '100%',
        marginTop: 10
    }
});