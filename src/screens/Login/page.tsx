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
export default class LoginScreen extends React.Component<Iprops, Istate> {
    constructor (props) {
        super (props)
        this.state ={
            isClickedSteam : false
        }
        this.TextColor = this.TextColor.bind(this)
    }
    TextColor () {
        if (this.state.isClickedSteam) return { color : '#ff2c2c'}
        else return { color : '#000000'}
    }
    render () {
        return (
            <View style = {[defaultStyle.container, styles.back]}>
                <View style = { styles.content}>
                    <View style = { styles.logo }></View>
                    <View style = { styles.lineBox}>
                        <View style = {styles.line}></View>
                        <View style = {{flex: 1}}></View>
                        <Text style = { styles.lineFont}>Login With</Text>
                        <View style = {{flex: 1}}></View>
                        <View style = {styles.line}></View>
                    </View>
                    <Text style = {[styles.notYet, this.TextColor()]}>Penlight Dancing이 출시 준비중입니다.</Text>
                    <View>
                        <Button
                            icon = {
                                <Image 
                                    style = { styles.buttonIcon }
                                    source = { require('../../../assets/icon.png') } 
                                />
                            }
                            buttonStyle = {[styles.buttonSize, styles.buttonColor1]} 
                            titleStyle = {[styles.buttonTitle, styles.buttonTitlePadding]} 
                            title = "Steam 계정으로 로그인"
                            onPress = { () => { this.setState({ isClickedSteam : true}) }}
                        />
                        <Button
                            buttonStyle = {[styles.buttonSize, styles.buttonColor2]} 
                            titleStyle = {styles.buttonTitle} 
                            title = "게스트 로그인"
                        />
                    </View>
                </View>
            </View>
        )
    }
}