import React from 'react'
import { Card, Title, Paragraph } from 'react-native-paper';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import Icon from '../../assets/weatherIcon'


const GlobalCard = (props) => {

    const { city, temp_c, temp_min_c, temp_max_c, feels_like_c, wind_speed, humidity, desc, releve, uri_icon } = props
    return (  
       
        <View style={{ flex: 1, marginLeft: 20, marginRight: 20 }}>
            
            
            <Card style={{ flex: 1, borderColor: 'black', borderWidth: 2, borderRadius: 15, marginBottom: 5, alignContent: 'center' }}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 20}}>

                    <Image
                        style={{ width: 200, height: 200 }}
                        source={{ uri: uri_icon }}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{desc}</Text>

                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom:5 }}>{temp_c} °</Text>
                    <Text style={{ fontSize: 15 }}>Dernier relevé: {releve}</Text>
                </View>
            </Card>
            <Card style={{ flex: 1, borderColor: 'black', borderWidth: 2, borderRadius: 15, marginBottom: 5 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center' }}>

                    <Card.Content style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='wi-thermometer' size={50} color="blue" />
                        <Title>Min</Title>
                        <Paragraph style={{ alignContent: 'center' }}>{temp_min_c}°</Paragraph>
                    </Card.Content>

                    <Card.Content style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='wi-thermometer' size={50} color="red" style={{ alignContent: 'center', justifyContent: 'center' }} />
                        <Title>Max</Title>
                        <Paragraph style={{ alignContent: 'flex-start', justifyContent: 'center' }}>{temp_max_c}°</Paragraph>
                    </Card.Content>

                    <Card.Content style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='wi-thermometer' size={50} color="orange" />
                        <Title>Ressenti</Title>
                        <Paragraph style={{ alignContent: 'center' }}>{feels_like_c}°</Paragraph>
                    </Card.Content>

                </View>
            </Card>
            <Card style={{ flex: 1, borderColor: 'black', borderWidth: 2, borderRadius: 15, marginBottom: 5 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 10 }}>

                    <Card.Content style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='wi-strong-wind' size={50} color="black" />
                        <Title>Vent</Title>
                        <Paragraph style={{ alignContent: 'center' }}>{wind_speed} km/h</Paragraph>
                    </Card.Content>

                    <Card.Content style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='wi-humidity' size={50} color="blue" />
                        <Title>Humidité</Title>
                        <Paragraph>{humidity}%</Paragraph>
                    </Card.Content>

                </View>
            </Card>
        </View>
    )
}

export default GlobalCard

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
})