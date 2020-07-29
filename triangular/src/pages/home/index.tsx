import React, { Component } from 'react'
import {View, Text, TextInput, ImageBackground, Image, Button, Alert} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import style from './style'
import {Feather as Icon} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

const home = () => {
    const navigation = useNavigation()

    function handleNavigation(){
        navigation.navigate('Points')
    }

    return (
        <ImageBackground 
            source={require('../../assets/home-background.png')}
            style={style.container}
            imageStyle={{width: 274, height: 368}}
        >
            <View style={style.main}>
                <Image source={require('../../assets/logo_1.png')}/>
            </View>
            <View style={style.footer}>
                <RectButton style={style.butao} onPress={handleNavigation}>
                    <View style={style.interButtao}>
                        <Text style={{color: "#fff"}}>
                            <Icon name="arrow-right" color="#FFF" size={24}/>
                        </Text>
                    </View>
                    <Text style={style.buttonText}>
                        Acessar
                    </Text>
                </RectButton>
            </View>
        </ImageBackground>
    )
}



export default home;