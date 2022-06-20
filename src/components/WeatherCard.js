import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { View, Text, ScrollView} from 'react-native';
import Icon from '../../assets/weatherIcon';

const WeatherCard = () => {
    return (
        <Card style={{ flex: 1, borderColor: 'black', borderWidth: 2, marginBottom: 2 }}>
            <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between',  marginHorizontal:10 }}>

                <Card.Content>
                    <Icon name='wi-strong-wind' size={50} color="black"/>
                    <Title>Vent</Title>
                    <Paragraph style={{alignContent:'center'}}>16 C°</Paragraph>
                </Card.Content>

                <Card.Content>
                    <Icon name='wi-humidity' size={50} color="blue" />
                    <Title>Humidité</Title>
                    <Paragraph>68</Paragraph>
                </Card.Content>               

            </View>
        </Card>

    )
}

export default WeatherCard