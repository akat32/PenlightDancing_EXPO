import { 
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';


const styles = StyleSheet.create({
    textBox: {
        flex: 1,
        width: vw(91.2),
        marginLeft: vw(4.4),
        marginRight: vw(6.7),
        marginTop: vh(3.8),
        alignItems: 'flex-start'
    },
    title : {
        color: '#ffffff',
        opacity: 0.87,
        fontSize: vw(6)
    },
    contentBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconBox: {
        width: vw(7),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: vw(1),
        height: vw(7),
        backgroundColor: '#3b5998',
        borderRadius: vw(3.4),
        marginRight: vw(9)
    },
    updateBox : {
        marginTop: vh(3.8),
        backgroundColor: '#151e24',
        justifyContent: 'center',
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
    outerBox: {
        marginTop: vh(3.8),
        width: '100%',
        height: vh(28),
        marginBottom: vh(3.8)
    },
    updateTitle: {
        color: '#fff',
        fontSize: vw(4),
        marginLeft: vw(2.4),
        marginBottom: vh(1.7)
    },
    updateIndex: {
        marginLeft: vw(2.4),
        fontSize: vw(3.3),
        color: '#fff',
        opacity: .6
    }
})

export { styles }