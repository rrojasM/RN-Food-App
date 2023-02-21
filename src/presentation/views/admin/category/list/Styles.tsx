import { StyleSheet } from "react-native";
import { MyColors } from "../../../../theme/AppTheme";

const ListStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        paddingTop: 50
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'contain'
    },
    form: {
        backgroundColor: 'white',
        height: '65%',
        width: '100%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingHorizontal: 30,
        marginTop: 30,
        position: 'absolute',
        bottom: 0
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20
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

export default ListStyles;