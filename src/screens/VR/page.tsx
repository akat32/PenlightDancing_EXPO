import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    SafeAreaView,
    FlatList,
    ScrollView,
    
} from 'react-native'

// import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, ThemeProvider } from 'react-native-elements';
import { Thumbnail } from 'react-native-thumbnail-video';
import { defaultStyle } from '../defaultStyles'
import { styles } from './style'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

interface Iprops { 
    isClickedSteam?: Boolean
    navigation
}

interface Istate { 
    isClickedSteam?: Boolean
}
const data = [
    {
        title : 'Not Today (Demo.var)',
        difficulty: 'Easy',
        artist: 'BTS',
        BPM: '110'
    },
]
export default class VRScreen extends React.Component<Iprops, Istate> {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator = {false} style = {{ flex: 1, backgroundColor :'#0b141a'}}>
            <View style = {[ defaultStyle.container, defaultStyle.backColor ]} >
                <View style = {styles.tutorial}>
                    <Image style = { styles.backImg} source = { require('../../../assets/beat.jpg')}/>
                    <View style = { styles.textBox}>
                        <Text style = { styles.title}>플레이 튜토리얼</Text>
                        <Text style = { styles.index}>Penlight Dancing의 기본 조작 방법을 익혀보세요.</Text>
                    </View>
                </View>
                <View style = { styles.previewContent}>
                    <Text style = { styles.title}>채보 프리뷰</Text>
                    <Text style = { styles.index}>게임 하기 전 플레이 할 음악의 채보를 확인해보세요.</Text>
                </View>
                <SafeAreaView style = {{
                    width: '100%',
                }}>
                    {
                        data.map(( item, i ) => {
                            return (
                            <Item
                                title = { item.title}
                                difficulty = { item.difficulty}
                                artist = { item.artist} 
                                BPM = { item.BPM }
                                navigation = { this.props.navigation }
                                key = { i }
                            />
                            )
                        })
                    }
                </SafeAreaView>
                
            </View>
            </ScrollView>
        )
    }
}
interface ItemProps {
    title : String,
    difficulty: String,
    artist: String,
    BPM: String,
    navigation
}
const Item = (props: ItemProps) => {
    return (
        <TouchableOpacity  onPress = { () => props.navigation.push('Preview')}>
        <View style = {styles.contentBox}>
            {/* <Image style = { styles.backImg} source = { require('../../../assets/KakaoTalk_20190920_221548778.png')}/> */}
            <Thumbnail showPlayIcon = { false } style = { styles.backImg} url="https://www.youtube.com/watch?v=9DwzBICPhdM" />
            <View style = { styles.content2}/>
            <View style = { styles.content}>
                <View style = {{flex: 1}}/>

                <View style = { styles.contentTextBox}>
                    <Text style = {styles.contentB}>{props.title}</Text>
                    <View style = {{flex: 1}}/>
                    <Text style = {styles.contentS}>{props.difficulty}</Text>
                </View>
                <View style = {{height: vh(1.2)}}/>
                <View style = { styles.contentTextBox}>
                    <Text style = {styles.contentB}>{props.artist}</Text>
                    <View style = {{flex: 1}}/>
                    <Text style = {styles.contentS}>{props.BPM}</Text>
                </View>
                    <View style = {{flex: 1}}/>

            </View>
        </View> 
        </TouchableOpacity>
    )
}