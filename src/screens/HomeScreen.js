import React from 'react'
import {View, Text, StyleSheet} from 'react-native'// import TempCard from '../components/TempCard'

import MainCard from '../components/MainCard'
import TempCard from '../components/TempCard'
import WeatherCard from '../components/WeatherCard'
import GlobalCard from '../components/GlobalCard'


const HomeScreen =(props) => {

    const {temp_c}= props

    return(
        <View style={styles.container}>  
        
        <Text style={styles.title}>Le Havre</Text>        
            
        {((typeof (data.main) != 'undefined') && (typeof (data.main.temp) != 'undefined')) &&            
            <View style={{flex:1}}>
                <Text>{temp_c}</Text>
            <GlobalCard temp_c={temp_c}/>
            <Text> Date du dernier relevé</Text>                          
            </View>}
        </View>
    
    )
}

export default HomeScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize:30,
        fontWeight:'bold',
        alignItems:'center'
    }
})
