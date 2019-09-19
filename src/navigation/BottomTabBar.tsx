import React, { useEffect} from 'react';

import {
    Text,
    View,
    StyleSheet,
    AsyncStorage,
    Image
} from 'react-native';
import {Icon} from 'react-native-elements'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { LoginScreen, ProfileScreen, VRScreen, SettingScreen, NewsScreen, RankingScreen } from '../screens'
import { DefaultProfile } from '../screens/Profile/guestPage'
import { DefaultRanking } from '../screens/Rank/guestPage'
import { DefaultSetting } from '../screens/Setting/guestSetting' 
async function isGuest () {
    try {
        let result = await AsyncStorage.getItem('isGuest')
        console.log(result)
        if( result == 'true') return true
        else return false
    } catch (e) {
        console.log(e)
    }
}

const TabNavigator = createBottomTabNavigator(
    {
        Profile: {
            screen: (isGuest()) ? (DefaultProfile) : (ProfileScreen),
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='person'
                        type="meterial"
                        color= {tintColor}
                        size={vw(7.8)} 
                    />
                )
            })
        },
        Ranking: {
            screen: (isGuest()) ? (DefaultRanking) : ( RankingScreen) ,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='md-trophy'
                        type="ionicon"
                        color= {tintColor}
                        size={vw(7)} 
                    />
                )
            })
        },
        VR: {
            screen: VRScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='google-cardboard'
                        type="material-community"
                        color= {tintColor}
                        size={vw(8.8)}
                    />
                )
            })
        },
        News: {
            screen: NewsScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='news'
                        type="entypo"
                        color= {tintColor}
                        size={vw(6.7)} 
                    />
                )
            })
        } ,
        Setting: {
            screen: (isGuest()) ? (DefaultSetting) : (SettingScreen),
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='settings'
                        type="meterial"
                        color= {tintColor}
                        size={vw(7)} 
                    />
                )
            })
        }
    },
    {
        initialRouteName: 'VR',        
        tabBarOptions: {
            lazy: false,
            activeTintColor: '#daffc0',
            style: {
                height: vh(9),
                backgroundColor: '#151e24',
            },
            tabStyle: {
                alignItems: 'center',
                borderTopWidth: vw(0.3),
                borderColor: '#daffc0'
            },
            tabBarOptions: {
                activeTintColor: "#46c3ad",
                inactiveTintColor: "#888",
            },
            labelStyle: {
                fontSize: vw(2.8),
                marginTop: -vw(3)
            }
        }
    },
);

export { TabNavigator }

// defaultNavigationOptions: ({navigation}) => ({
//     backgroundColor : '#151E24',
//     tabBarIcon: ({focused, horizontal, tintColor}) => {
//         const {routeName} = navigation.state;
//         let icon = "▲";

//         if(routeName === 'Profile'){
//             icon = "🌈";
//         } else if(routeName === 'Ranking'){
//             icon = "🌙"
//         } 

//         // can use react-native-vector-icons
//         // <Icon name={iconName} size={iconSize} color={iconColor} />
//         return (
//             <Text style={{color: focused && "#daffc0" || "#a1a5a7"}}>{icon}</Text>
//         )
//     },
//     tabBarComponent: (props:any)=> {
//         return <BottomTab {...props}/>
//     },
// }),
// lazy: false,
// tabBarOptions: {
//     activeTintColor: "#46c3ad",
//     inactiveTintColor: "#888",
// },