import { StyleSheet } from "react-native";

const ClientProductDetailStyle = StyleSheet.create({
    productImage: {
        width: '100%',
        height: '45%'
    },
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'white'
    },
    productDetail: {
        position: 'absolute',
        width: '100%',
        height: '57%',
        backgroundColor: 'white',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    divider: {
        height: 1,
        backgroundColor: '#f2f2f2',
        marginTop: 15
    },
    productInfo: {
        padding: 30,
        flex: 1
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase'
    },
    titleDesc: {
        marginTop: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16
    },
    description: {
        fontSize: 14,
        marginTop: 5,
        textAlign: 'justify'
    },
    productActions: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 30
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
    buttonAdd: {
        flex: 1,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    back: {
        position: 'absolute',
        top: 35,
        left: 15,
    },
    backImage: {
        width: 40,
        height: 40
    }
});


export default ClientProductDetailStyle;