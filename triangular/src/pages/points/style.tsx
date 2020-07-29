import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    marginin:{
        margin: 18
    },
    main:{
        flex: 1,
        justifyContent: 'center', 
    },
    footer:{},
    title:{
        marginTop: 0,
        fontSize: 25,
        color: '#990000',
        fontWeight: 'bold'

    },
    descrip:{
        fontSize: 15,
        marginTop: 3,
    },
    titleContainer:{
        marginLeft: 11
    },
    mapContainer: {
        flex: 1,
        width: '100%',
        overflow: 'hidden',
        height: '100%',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    butao:{
        backgroundColor: '#990000',
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
        position: 'absolute',
        bottom: 7,
        width: '97%'
    },
    
})


export default style