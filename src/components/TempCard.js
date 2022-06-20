import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { View, Text, ScrollView } from 'react-native';
import Icon from '../../assets/weatherIcon'


const TempCard = () => {

    // const {temp_min, temp_max, temp_res}= props

    return (
        <Card style={{ flex: 1, borderColor: 'black', borderWidth: 2, marginBottom: 2 }}>
            <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', marginHorizontal:10 }}>

                <Card.Content>
                    <Icon name='wi-thermometer' size={50} color="blue"/>
                    <Title>Min</Title>
                    {/* <Paragraph style={{alignContent:'center'}}>{temp_min}</Paragraph> */}
                    <Paragraph style={{alignContent:'center'}}>19</Paragraph>
                </Card.Content>

                <Card.Content>
                    <Icon name='wi-thermometer' size={50} color="red" />
                    <Title>Max</Title>
                    {/* <Paragraph>{temp_max}</Paragraph> */}
                    <Paragraph>26</Paragraph>
                </Card.Content>

                <Card.Content>
                    <Icon name='wi-thermometer' size={50} color="orange" />
                    <Title>Ressenti</Title>
                    {/* <Paragraph>{temp_res}</Paragraph> */}
                    <Paragraph>30</Paragraph>
                </Card.Content>

            </View>
        </Card>

    )
}

export default TempCard