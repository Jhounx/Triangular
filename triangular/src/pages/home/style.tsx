import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#fff'
    },
    main:{
        flex: 1,
        justifyContent: 'center', 
    },
    butao:{
        backgroundColor: '#990000',
        height: 45,
        flexDirection: 'row',
        borderRadius: 5,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    footer:{},
    interButtao: {
        height: '100%',
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
      }
})

export default style