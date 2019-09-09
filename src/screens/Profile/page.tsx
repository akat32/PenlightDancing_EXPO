import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'

// import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, ThemeProvider } from 'react-native-elements';

import { defaultStyle } from '../defaultStyles'
import { styles } from './style'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

interface Iprops { 
    isClickedSteam?: Boolean
}

interface Istate { 
    isClickedSteam?: Boolean
}

export default class ProfileScreen extends React.Component<Iprops, Istate> {
    render() {
        return (
            <View style = { defaultStyle.container }>
                
            </View>
        )
    }
}