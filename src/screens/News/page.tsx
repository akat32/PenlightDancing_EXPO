import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    SafeAreaView,
    FlatList
} from 'react-native'


import {Icon} from 'react-native-elements'
import { Button, ThemeProvider } from 'react-native-elements';

import { defaultStyle } from '../defaultStyles'
import { styles } from './style'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const notice = [
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    },
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    },
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    },
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    },
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    },
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    },
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    },
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    },
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    },
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    },
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    },
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    },
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    },
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    }
]
interface Iprops { 
    isClickedSteam?: Boolean
}

interface Istate { 
    isClickedSteam?: Boolean
}

interface ItemProps {
    title: String
}


const Item = (props:ItemProps) => {
    return (
        <Text style = {{
            fontSize: vw(4),
            color: '#fff',
            opacity: .87,
            marginBottom: vh(1.8)
        }}>{ props.title}</Text>
    )
}
export default class NewsScreen extends React.Component<Iprops, Istate> {
    render() {
        return (
            <View style = {[ defaultStyle.container, defaultStyle.backColor ]}>
                <View style = { styles.textBox }>
                    <Text style = { styles.title}>업데이트 사항</Text>
                    <View style = { styles.updateBox}>
                        <Text style = {styles.updateTitle}>[Penlight Dancing]2019.09.28 업데이트</Text>
                        <Text style = {styles.updateIndex}>이 곳을 눌러 업데이트 내역을 확인하세요</Text>
                    </View>
                    <Text style = { styles.title}>새소식</Text>
                    <SafeAreaView style = { styles.outerBox}>
                        <FlatList 
                            data = {notice}
                            renderItem={({ item }) => <Item title={item.index} />}
                            // keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                    <View style = { styles.contentBox}>
                        <Text style = { styles.title}>공식 커뮤니티</Text>
                        <View style = {{ flex : 1}}/>
                        <View style = { styles.iconBox}>
                            <Icon 
                                name="facebook"
                                type = "material-community"
                                color = '#fff'
                                size = { vw(6.7)}
                            />
                        </View>
                        <View style = {[styles.iconBox, { backgroundColor: '#c4302b'}]}>
                            <Icon 
                                name="youtube"
                                type = "material-community"
                                color = '#fff'
                                size = { vw(4.7)}
                            />
                        </View>
                        <View style = {[styles.iconBox, { 
                            backgroundColor: '#0b141a',
                            marginRight: 0
                        }]}>
                            <Image 
                                source = { require('../../../assets/web.png')}
                                style = {{
                                    width: '100%',
                                    height: '100%'
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
