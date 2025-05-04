import { Image, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import styles from '@/styles/Homepage_styles'
import { Ionicons } from '@expo/vector-icons';


const WeatherInfoPage = () => {

    const params = useLocalSearchParams()
    const weatherData = JSON.parse(params.data)

    console.log(weatherData)

    return (


        <View style={styles.container}>
            {weatherData.error
                ? <View>{weatherData.error.message}</View> :
                <WeatherInfo weatherData={weatherData} />
            }

        </View>
    )
}


const WeatherInfo = ({ weatherData }) => {
    return (
        <View style={styles.contentContainer}>
            <Text style={styles.InfoTitle}>{weatherData.location.name}</Text>
            <View style={styles.InfoTempView}>
                <Ionicons name="thermometer" size={24} color="red" />
                <Text style={styles.InfoTemp}>{`Temp: ${weatherData.current.temp_c}`}</Text>
            </View>
            <View style={styles.InfoConditionView}>
                <Image source={{ uri: weatherData.current.condition.icon }} style={{ width: 200, height: 200 }} />
                <Text style={styles.InfoTemp}>{weatherData.current.condition.text}</Text>
            </View>
            <View style={styles.humidityInfo}>
                <Text style={styles.InfoTemp}>{`Humidity: ${weatherData.current.humidity}`}</Text>
                <Ionicons name='water' size={24} color="blue" />
            </View>
        </View>
    )
}

export default WeatherInfoPage

