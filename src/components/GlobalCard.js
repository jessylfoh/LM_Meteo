import React from 'react'
import { Card, Title, Paragraph } from 'react-native-paper';
import { View, Text, ScrollView, Image } from 'react-native';
import Icon from '../../assets/weatherIcon'


const GlobalCard = (props) => {

    const { city, temp_c, temp_min_c, temp_max_c, feels_like_c, wind_speed, humidity, desc, releve } = props
    return (
        <View style={{ flex: 1 }}>
            <Card style={{ flex: 1, borderColor: 'black', borderWidth: 2, marginBottom: 5, alignContent: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 50 }}>
                    {/* <Icon name="wi-day-sunny" size={100} /> */}
                    <Image
                        style={{ width: 50, height: 50 }}
                        // source={{uri =`https://openweathermap.org/img/w/${Data.weather[0].icon}.png}}
                    />
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{desc}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 15 }}>Dernier relevé: {releve}</Text>
                </View>
            </Card>
            <Card style={{ flex: 1, borderColor: 'black', borderWidth: 2, marginBottom: 5 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center' }}>

                    <Card.Content>
                        <Icon name='wi-thermometer' size={50} color="blue" />
                        <Title>Min</Title>
                        <Paragraph style={{ alignContent: 'center' }}>{temp_min_c}</Paragraph>
                    </Card.Content>

                    <Card.Content style={{ alignContent: 'center', justifyContent: 'space-between' }}>
                        <Icon name='wi-thermometer' size={50} color="red" />
                        <Title style={{ alignContent: 'center', justifyContent: 'center' }}>Max</Title>
                        <Paragraph style={{ alignContent: 'center', justifyContent: 'center' }}>{temp_max_c}</Paragraph>
                    </Card.Content>

                    <Card.Content>
                        <Icon name='wi-thermometer' size={50} color="orange" />
                        <Title>Ressenti</Title>
                        <Paragraph style={{ alignContent: 'center' }}>{feels_like_c}</Paragraph>
                    </Card.Content>

                </View>
            </Card>
            <Card style={{ flex: 1, borderColor: 'black', borderWidth: 2, marginBottom: 5 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>

                    <Card.Content>
                        <Icon name='wi-strong-wind' size={50} color="black" />
                        <Title>Vent</Title>
                        <Paragraph style={{ alignContent: 'center' }}>{wind_speed}</Paragraph>
                    </Card.Content>

                    <Card.Content>
                        <Icon name='wi-humidity' size={50} color="blue" />
                        <Title>Humidité</Title>
                        <Paragraph>{humidity}</Paragraph>
                    </Card.Content>

                </View>
            </Card>
        </View>
    )
}

export default GlobalCard