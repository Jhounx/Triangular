import React, { useState, useEffect, useRef } from 'react';
import { Modal, Text, View, TouchableOpacity, Image, Alert, SafeAreaView, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import {useNavigation, useRoute} from '@react-navigation/native'
import style from './style'
import {Feather as Icon, FontAwesome} from '@expo/vector-icons';
import Points from '../points'
import SvgUri from 'react-native-svg-uri';
import api from '../../api'

const Camera1 = () =>{
    const camRef = useRef(null);
    const [hasPermission, setHasPermission] = useState<boolean>();
    const [type, setType] = useState(Camera.Constants.Type.front);
    const [foto, setFoto] = useState(null);
    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState(false);
    const [baseFoto, setBase] = useState(null)
    const rout = useRoute();
    const params = rout.params;

    const navigation = useNavigation()
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted')
      })();
    }, []);

    async function takePicture(){
      if(camRef){
        const options = { quality: 0.6, base64: true, mirrorImage: true }
        const data = await camRef.current.takePictureAsync(options);
        setBase(data.base64)      
        setFoto(data.uri);
        setOpen(true);
      }
    }

    async function enviarFoto(){
      if(foto != null){
        /*const data = new FormData();
        data.append('file', { uri: foto, name: 'anyname.jpg', type: 'image/jpg' })*/
        const body = {
          foto: {
             data: baseFoto 
          },
          latitude: params.latitude,
          longitude: params.longitude
        }
        console.log('Enviando Imagem...')
        setLoad(true)
        const response = await api.post('reportPoint', body)
        if(response.data){
          setLoad(false)
          if(response.data.error){
            let error = response.data.error
            if(error===1){
              Alert.alert('Erro na requisição')
            }
            else if(error===2){
              Alert.alert('Erro no upload da imagem')
            }
          }
          setFoto(null)
          setOpen(false)
        }
      }
    }

    const {height, width} = Dimensions.get('screen')

    if(hasPermission === null){
      return <View/>
    }

    if(hasPermission === false){
      return <View><Text>Por favor permita a camera</Text></View>
    }
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Camera style={{flex: 1, aspectRatio: 3/4}}
         flashMode={Camera.Constants.FlashMode.off} 
         type={type} 
         ref={camRef}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{position: 'absolute', top: 20, left: 20}}>
              <Icon name='arrow-left' size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 20,
                left: width - 50
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{ color: '#fff' }}>
                  <Icon name="rotate-ccw" color="#fff" size={23}/>
              </Text>
            </TouchableOpacity>   
          </View>
          { foto &&
            <Modal
            animationType="slide"
            transparent={false}
            visible={open}
            
            >
              {load &&
              <Modal
                animationType="fade"
                transparent={true}
                visible={load}
              >
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <SvgUri
                  width="200"
                  height="200"
                  source={{uri: '../../assets/brabo.svg'}}
                />
                </View>
              </Modal>
              }
              <TouchableOpacity onPress={()=>{setOpen(false)}} style={{margin: 10}}>
                  <Icon name="x-circle" size={30} color="rgb(0, 100, 255)"/>
              </TouchableOpacity>
              <View style={{flex:1, justifyContent: "center", alignItems: "center", margin: 10}}>
                <Image
                  source={{uri: foto}}
                  style={{width: '100%', height: '100%', borderRadius: 7, margin: 5}}
                />
              </View>
              <View style={style.paiButaozin}>
                    <View style={style.butaozin}>
                        <TouchableOpacity style={style.butao} onPress={enviarFoto} activeOpacity={0.7}>
                            <View style={style.interButtao}>
                                <Text style={{color: "#fff"}}>
                                    <Icon name="play" color="#FFF" size={24}/>
                                </Text>
                            </View>
                            <Text style={style.buttonText}>
                                Enviar Reporte
                            </Text>
                        </TouchableOpacity>
                    </View>
              </View>
            </Modal> 
          }
        </Camera>
        <SafeAreaView style={style.tirarFoto}>
          <TouchableOpacity activeOpacity={0.6} style={style.button} onPress={takePicture}>
            <Icon name="aperture" size={55} color="#fff"/>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    );
  }

export default Camera1