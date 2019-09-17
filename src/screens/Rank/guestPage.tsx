import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native'

// import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, ThemeProvider } from 'react-native-elements';

import { defaultStyle } from '../defaultStyles'
import { guest } from './style'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

interface Iprops { 
    navigation
}

interface Istate { 
}

export const DefaultRanking = (props: Iprops) => {
    return (
        <View style = {[defaultStyle.container, defaultStyle.back]}>
            <View style = {guest.contentBox}>
                <Text style=  { guest.title }>랭킹을 확인할 수 없음</Text>
                <View style = {guest.dump}></View>
                <Text style = {guest.index}>아직 Penlight Dancing이 출시되지 않아</Text>
                <Text style = {guest.index}>랭킹을 확인할 수 없습니다.</Text>
                <Text style = {guest.index}>News 화면에서 출시 정보 및</Text>
                <Text style = {guest.index}>새소식을 확인해보세요!</Text>
            </View>
        </View>

    )
}