import { 
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
    tutorial: {
        position: 'relative',
        width: '100%',
        height: vw(62)
    },
    textBox: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.87)',
        height: vw(22),
        justifyContent: 'center',
        zIndex: 999
    },
    backImg: {
        width: '100%',
        height: vw(62),
    },
    title: {
        marginLeft: vw(4.4),
        fontSize: vw(5.5),
        marginBottom: vh(1.5),
        color: '#ffffff',
    },
    index: {
        marginLeft: vw(4.4),
        color: '#ffffff',
        opacity: .6,
        fontSize: vw(3.5)
    },
    previewContent: {
        width : '100%',
        height: vh(18),
        justifyContent: 'center'
    },
    contentBox: {
        position: 'relative',
        width: '100%',
        height: vw(62),
        marginBottom: vh(1)
    },
    content2: {
        width: vw(100),
        position: 'absolute',
        height: vw(40),
        top: 0,
        backgroundColor: '#fff',
        opacity: 0
    },
    content: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: vw(22),
        backgroundColor: 'rgba(0,0,0,0.87)' 
    },
    contentTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    contentB: {
        fontSize: vw(4),
        marginLeft: vw(4.4),
        color: '#fff'
    },
    contentS : {
        marginRight: vw(4.4),
        fontSize: vw(3.6),
        color: '#fff'
    }
})


export { styles }