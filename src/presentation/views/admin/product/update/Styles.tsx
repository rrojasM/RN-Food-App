import { StyleSheet } from "react-native";
import { MyColors } from "../../../../theme/AppTheme";

const UpdateProductStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    categoryInfo: {
        //flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCategory: {
        //marginLeft: 10
        color: 'gray',
        fontSize: 17,
        fontWeight: 'bold'
    },
    imageContainer: {
        paddingTop: 40,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 15
    },
    image: {
        width: 110,
        height: 110,
        resizeMode: 'contain'
    },
    imageCategory: {
        width: 50,
        height: 50
    },
    form: {
        backgroundColor: 'white',
        height: '70%',
        width: '100%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingHorizontal: 30,
        marginTop: 30,
        position: 'absolute',
        bottom: 0
    },
    buttonContainer: {
        //position: 'absolute',
        //bottom: 20,
        //left: 20,
        //right: 20
        marginTop: 50
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default UpdateProductStyles;