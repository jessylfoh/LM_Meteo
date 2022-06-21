import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import axios from 'axios'
import GlobalCard from './src/components/GlobalCard';
import dayjs from 'dayjs';
import { ImageBackground } from 'react-native'

function Background(temp) {
  switch (temp) {
    case 'Rain': return require('../Weather/src/img/pluie.jpg')
    case 'Clouds': return require('../Weather/src/img/Nuage.jpg')
    case 'Clear': return require('../Weather/src/img/soleil.jpg')

  }
}

const App = () => {

  //Initialisation des constantes et states
  const [data, setData] = useState([]);
  const [city, setCity] = useState('Rouen')
  const [temp, setTemp] = useState('')
  const [error, setError] = useState(null);


  console.log("city:" + city)

  //Appel de l'API
  const getWeather = async (city) => {
    const keyAP = "df37dec74a3e59e6529ef1cd5b3ecfdf"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=${keyAP}`
    await axios.get(URL)
      .then(response => {
        setTemp(response.data.main.temp)
        setData(response.data)
      })
      .catch(error => {
        console.error("Error fetching data: ", error)
        setError(error)
      })
  }
  useEffect(() => {
    getWeather(city)

  }, [])

  console.log("les datas", data)


  let temp_c = 0
  let temp_min_c = 0
  let temp_max_c = 0
  let feels_like_c = 0
  let wind_speed = 0
  let humidity = 0
  let desc = "Non Disponible"
  let date = data.dt
  let releve = "Non Disponible"
  let icon = ''
  let uri_icon = `https://openweathermap.org/img/w/04d.png`

  console.log("date: " + date)

  if ((typeof (data.main) != 'undefined')) {
    //Conversion des temperatures
    temp_c = (data.main.temp - 273.15).toFixed(2)
    temp_min_c = (data.main.temp_min - 273.15).toFixed(2)
    temp_max_c = (data.main.temp_max - 273.15).toFixed(2)
    feels_like_c = (data.main.feels_like - 273.15).toFixed(2)
    //Conversion de la vitesse du vent
    wind_speed = (data.wind.speed * 3.6).toFixed(2)
    //Autres données
    desc = data.weather[0].description
    icon = data.weather[0].icon
    uri_icon = `https://openweathermap.org/img/w/${icon}.png`
    humidity = (data.main.humidity)
    releve = dayjs(Date(date)).format('DD/MM/YYYY HH:mm')
    console.log("releve: " + releve)
    console.log('uri_icon: ' + uri_icon)
    console.log("main " + data.weather?.[0].main)



  }

  return (
    <View style={styles.container}>
      <ImageBackground source={Background(data.weather?.[0].main)} resizeMode="cover" style={styles.image}>
        <Searchbar style={{borderRadius:15, marginTop:10}}
        placeholder="Votre ville"
        onChangeText={city => setCity(city)}
        onBlur={() => getWeather(city)}
        value={city}
      />
     

      <Text style={styles.title}>{city}</Text>

      <GlobalCard
        city={city}
        temp_c={temp_c}
        temp_min_c={temp_min_c}
        temp_max_c={temp_max_c}
        feels_like_c={feels_like_c}
        wind_speed={wind_speed}
        humidity={humidity}
        desc={desc}
        releve={releve}
        uri_icon={uri_icon}
      />
      </ImageBackground>
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})