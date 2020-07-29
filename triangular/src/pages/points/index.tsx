import React,  { useState, useEffect } from 'react'
import {View, Text, TouchableOpacity, Alert} from 'react-native'
import {Feather as Icon} from '@expo/vector-icons'
import style from './style'
import {useNavigation} from '@react-navigation/native'
import Map, { Marker } from 'react-native-maps'
import { RectButton } from 'react-native-gesture-handler'
import * as Location from 'expo-location';
import api from '../../api'

interface points {
    id: number;
    latitude: number;
    longitude: number;
}

const Points = () =>{
    const navigation = useNavigation()
    function returnNavigate(){
        if (initialLocation[0] !== 0 && initialLocation[1] !== 0){
            navigation.goBack()
        }
        Alert.alert('Por favor espere até o GPS conseguir sua localização!')
    }

    function tirarFoto(){
        navigation.navigate('Camera', 
            {latitude: initialLocation[0],
            longitude: initialLocation[1]});
    }

    let [initialLocation, setInitLocation] = useState<[number, number]>([0, 0]);
    let [pontos, setPoints] = useState<points[]>([])

    useEffect(()=> {
        async function loca(){
            let { status } =  await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Ops...', 'Precisamos da permissão de localização para continuar')
                return
            }
            let location = await Location.getCurrentPositionAsync();
            const { latitude , longitude } = location.coords
            setInitLocation([latitude, longitude])
            api.get('getPoints',{
                params:{
                    latitude,
                    longitude,
                    raio: 10  
                }
            }).then((response)=>{
                setPoints(response.data)
            })  
        }
        loca()
    }, []);

    return (
        <>
            <View style={style.container}>
                <View style={style.marginin}>
                    <TouchableOpacity onPress={returnNavigate}>
                        <Icon name='arrow-left' size={22} color="#990000" />
                    </TouchableOpacity>
                    <View style={style.titleContainer}>
                        <Text style={style.title}>Bem vindo!</Text>
                        <Text style={style.descrip}>Reporte uma aglomeração!</Text>
                    </View>
                </View>
                <View style={style.mapContainer}>
                    {initialLocation[0] !== 0 && (
                        <Map style={style.map} initialRegion={{
                            latitude: initialLocation[0],
                            longitude: initialLocation[1],
                            latitudeDelta: 0.014,
                            longitudeDelta: 0.014
                        }}>
                            <Marker title={"Sua localização"} coordinate={{
                                latitude: initialLocation[0],
                                longitude: initialLocation[1],
                            }}>
                                <View style={{backgroundColor:"transparent"}}>
                                    <Icon name='navigation' size={21} color="#990000"/>
                                </View>
                            </Marker>
                            {pontos.map(ponto=>(
                                    <Marker key={ponto.id} title={"Ponto de aglomeração"} coordinate={{
                                        latitude: ponto.latitude,
                                        longitude: ponto.longitude,
                                    }}>
                                        <View>
                                            <Icon name="alert-triangle" color="#d6b500" size={20}/>
                                        </View>
                                    </Marker>
                                    )
                                )
                            }
                        </Map>
                    )}
                </View>
                <View style={style.paiButaozin}>
                    <View style={style.butaozin}>
                        <TouchableOpacity style={style.butao} onPress={tirarFoto} activeOpacity={0.7}>
                            <View style={style.interButtao}>
                                <Text style={{color: "#fff"}}>
                                    <Icon name="camera" color="#FFF" size={24}/>
                                </Text>
                            </View>
                            <Text style={style.buttonText}>
                                Reportar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Points