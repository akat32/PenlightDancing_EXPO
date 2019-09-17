import { 
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
})

const guest = StyleSheet.create({
    contentBox: {
        width: vw(91.6),
        flex: 1,
        marginTop: vh(3.8),
        alignItems: 'center'
    },
    profileBox: {
        backgroundColor: '#151e24',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: vh(15),
        borderRadius: vw(4.8),
        shadowColor: "#29000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 6,
        marginBottom: vh(3.8)
    },
    BText: {
        fontSize: vw(4.5),
        color: '#fff',
        opacity: .87,
        marginLeft: vw(7.3),
        marginBottom: vh(1.5)
    },
    SText: {
        color: '#fff',
        opacity: .6,
        fontSize: vw(3.3),
        marginLeft: vw(7.3)
    },
    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 6,
    },
    profileImg: {
        width: vw(19.5),
        marginRight: vw(7.3),
        height: vw(19.5),       
    },
    menuBox: {
        width: vw(86.6),
        flex: 1
    },
    lineBox: {
        height: vh(8.6),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: vw(.2),
        borderBottomWidth: vw(.2),
        borderColor: 'gray'
    },
    noLineBox: {
        height: vh(8.6),
        justifyContent: 'center'
    },
    menuText: {
        fontSize: vw(4),
        color: '#fff',
        opacity: .87
    }
})

export { styles, guest }