import React from 'react';

import {
    Text
} from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { ProfileStack, RankingStack, VRStack, NewsStack, SettingStack } from './AppNavigator'

const TabNavigator = createBottomTabNavigator(
    {
        Profile: ProfileStack,
        Ranking: RankingStack,
        VR: VRStack,
        News: NewsStack,
        Setting: SettingStack,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            backgroundColor : '#151E24',
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon = "▲";

                if(routeName === 'Profile'){
                    icon = "🌈";
                } else if(routeName === 'Ranking'){
                    icon = "🌙"
                } 

                // can use react-native-vector-icons
                // <Icon name={iconName} size={iconSize} color={iconColor} />
                return (
                    <Text style={{color: focused && "#daffc0" || "#a1a5a7"}}>{icon}</Text>
                )
            }
        }),
        lazy: false,
        tabBarOptions: {
            activeTintColor: "#46c3ad",
            inactiveTintColor: "#888",
        },
    }
);

export { TabNavigator }