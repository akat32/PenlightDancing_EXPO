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
    Linking
} from 'react-native'


import {Icon} from 'react-native-elements'
import { Button, ThemeProvider } from 'react-native-elements';

import { defaultStyle } from '../defaultStyles'
import { styles } from './style'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const notice = [
    {
        index: ' Penlight Dancing Official App 출시'
    },
    {
        index: 'Penlight Dancing STAC 앱개발교육 학습우수상 수상'
    },
    {
        index: 'EDM 아티스트 3rd Prototype과 연계 확정'
    },
    {
        index: 'EDM 아티스트 NIVIRO와 연계 확정'
    },
    {
        index: 'EDM 아티스트 Syn Cole과 연계 확정'
    },
    {
        index: 'STA+C 2019 결선 진출'
    },
    {
        index: 'STA+C 2019 본선 진출'
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
    componentDidMount () {
        // let db = firebase.firestore();

    }
    render() {
        return (
            <View style = {[ defaultStyle.container, defaultStyle.backColor ]}>
                <View style = { styles.textBox }>
                    <Text style = { styles.title}>업데이트 사항</Text>
                    <View style = { styles.updateBox}>
                        <Text style = {styles.updateTitle}>[Official App] 0.1 버전 출시</Text>
                        <Text style = {styles.updateIndex}>VR프리뷰 기능 사용 가능</Text>
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
                        <TouchableOpacity onPress = { () => {
                            Linking.canOpenURL("fb://page/2230155360416857").then(supported => {
                                if (supported) {
                                    return Linking.openURL("fb://page/2230155360416857");
                                } else {
                                    return Linking.openURL("https://www.facebook.com/PenlightDancing/");
                                }
                            })
                        }}>
                        <View style = { styles.iconBox}>
                            <Icon 
                                name="facebook"
                                type = "material-community"
                                color = '#fff'
                                size = { vw(6.7)}
                            />
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = { () => {
                            Linking.canOpenURL("https://www.youtube.com/channel/UCCnf0hcshO5v_NYk8IZ9vJw").then(supported => {
                                if (supported) {
                                    return Linking.openURL("https://www.youtube.com/channel/UCCnf0hcshO5v_NYk8IZ9vJw");
                                } else {
                                    return Linking.openURL("https://www.youtube.com/channel/UCCnf0hcshO5v_NYk8IZ9vJw");
                                }
                            })
                        }}>
                        <View style = {[styles.iconBox, { backgroundColor: '#c4302b'}]}>
                            <Icon 
                                name="youtube"
                                type = "material-community"
                                color = '#fff'
                                size = { vw(4.7)}
                            />
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = { () => {
                            Linking.canOpenURL("http://penlightDancing.com").then(supported => {
                                if (supported) {
                                    return Linking.openURL("http://penlightDancing.com");
                                } else {
                                    return Linking.openURL("http://penlightDancing.com");
                                }
                            })
                        }}>
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
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
