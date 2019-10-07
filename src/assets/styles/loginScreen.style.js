import {
    StyleSheet
} from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 11,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewTop: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewButton: {
        width: 250,
        height: 50,
        borderRadius: 5,
        margin: 15,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(186,12,47)',
    },
    textButton: {
        textAlign: 'center',
        color: 'rgb(255,255,255)',
        fontWeight: 'bold'
    },
    tabbar: {
        backgroundColor: 'rgb(255,255,255)',
        width: '100%',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textBottom: {
        fontWeight: 'bold',
        color: 'rgb(255,255,255)',
        textAlign: 'center'
    },
    btnClick: {
        backgroundColor: 'rgb(159,34,78)',
        width: 100,
        height: 46,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnHorizontal:{
        backgroundColor: 'rgb(120,180,61)',
        width: 80,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',        
        margin:8
    },
    itemList: {
        backgroundColor: '#f0ffff',
        marginVertical: 10,
        borderRadius: 15,
        width: 300,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textItem: {
        fontSize: 14,
        alignItems: 'center',
        letterSpacing: 0.51,
        color: 'rgb(255,130,0)',
        fontWeight: 'bold'
    },
    textItem2: {
        fontSize: 14,
        alignItems: 'center',
        letterSpacing: 0.51,
        color: 'rgb(179,179,179)',
        fontWeight: 'bold'
    }
});


