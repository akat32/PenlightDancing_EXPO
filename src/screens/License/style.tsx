import { 
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
    youtubeSize: {
        width: vw(100),
        height: vh(40),
        backgroundColor: 'gray'
    },
    info : {
        width: vw(100),
        height: vh(54),
        borderTopLeftRadius: vw(3.5),
        borderTopRightRadius: vw(3.5),
        position: 'absolute',
        backgroundColor: '#0b141a',
        bottom: 0,
        alignItems: 'center'
    },
    contentTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentB: {
        fontSize: vw(5),
        marginLeft: vw(6),
        color: '#fff'
    },
    contentS : {
        marginRight: vw(6),
        fontSize: vw(4),
        color: '#fff'
    },
    copyrightBox: {
        width: vw(82.2),
        height: vh(10),
        borderTopWidth: vw(0.3),
        borderBottomWidth: vw(0.3),
        borderColor: 'gray',
        justifyContent: 'center'
    },
    demoText: {
        fontSize: vw(2.6),
        lineHeight: vw(5),
        color: '#ff2c2c',
        textAlign: 'center'
    },
    Text: {
        fontSize: vw(2.6),
        lineHeight: vw(5),
        color: '#ffffff',
        textAlign: 'center'
    },
    playInfo: {
        flex:1
    },
    box: {
        flex: 1,
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoLine: {
        flex: 1,
        marginLeft: vw(6),
        marginRight: vw(6),
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoBText: {
        color :'#fff',
        fontSize: vw(3.5)
    },
    infoSText: {
        color: '#fff',
        fontSize: vw(2.9)
    }
})

const headerStyle = StyleSheet.create({
    container : {
        width: '100%',
        height: vh(8),
        backgroundColor: '#151e24',
        borderBottomWidth: vw(0.3),
        borderColor: '#daffc0',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title : {
        color: '#fff',
        fontSize: vw(4.3)
    },
    iconStyle: {
    },
})
export{  styles, headerStyle }