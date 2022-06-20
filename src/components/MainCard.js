import React from 'react'
import { Card, Title, Paragraph } from 'react-native-paper';
import { View, Text, ScrollView } from 'react-native';
import Icon from'../../assets/weatherIcon'

const MainCard = () => {
    return (
        <View style={{ flex: 1 }}>
            <Card style={{ flex: 1, borderColor: 'black', borderWidth: 2, marginBottom: 5 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Icon name="wi-day-sunny" size={100}/>
                                      
                        <Text>23 C°</Text>
                          
                </View>
            </Card>
        </View>
    )
}
export default MainCard