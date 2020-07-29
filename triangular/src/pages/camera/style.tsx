import {StyleSheet, Dimensions} from 'react-native'
const {height, width} = Dimensions.get('screen')


const style = StyleSheet.create({
    button: {
        borderRadius: 5,
        backgroundColor: 'transparent',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 55,
        marginLeft: (width/2) - 55/2
    },
    tirarFoto:{
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        display: 'flex'
    },
    butao:{
        backgroundColor: 'rgb(0, 100, 255)',
        height: 45,
        flexDirection: 'row',
        borderRadius: 6,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 5,
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 18,
    },
    interButtao: {
        height: '100%',
        width: 60,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paiButaozin:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    butaozin:{
        bottom: 7,
        width: '97%'
    }

})

export default style