import { StyleSheet } from "react-native";
import { MyColors } from "../../../../theme/AppTheme";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    products: {
        width: '100%',
        height: '43%'
    },
    info: {
        width: '100%',
        height: '55%',
        backgroundColor: '#f7f5f1',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30
    },
    infoRow: {
        flexDirection: 'row',
        marginTop: 20
    },
    infoImage: {
        width: 30,
        height: 30,
        marginTop: 10,
        marginVertical: 10
    },
    infoText: {
        flex: 1
    },
    infoTitle: {
        color: 'black',
        fontWeight: 'bold'
    },
    infoDesc: {
        color: 'gray',
        fontSize: 13,
        marginTop: 3
    },
    deliveries: {
        fontWeight: 'bold',
        marginTop: 15,
        color: MyColors.primary
    },
    totalInfo: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    total: {
        fontWeight: 'bold',
        fontSize: 17
    },
    button: {
        width: '50%'
    },
    dropDawn: {
        marginTop: 15
    }

});

export default styles;