import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "@/styles/Homepage_styles"
import { useState } from "react";
import { useRouter } from "expo-router";

// fetch(`https://api.weatherapi.com/v1/current.json?key=f2d7a87ff9134db6a9e104301250305&q=${city}`)

const Homepage = () => {
  const router = useRouter()
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  console.log("rerender")

  const handleSearch = async () => {
    console.log("city name:", city)

    try {
      setLoading(true)
      setError(null)

      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=f2d7a87ff9134db6a9e104301250305&q=${city}`)
      console.log("API RES::::::::::::::::::::", res)
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json()
      setCity("")

      router.push({
        pathname: "./WeatherInfoPage",
        params: { data: JSON.stringify(data) }
      })


    } catch (err) {
      setError(err.message); // Set error message
      console.error('API Error:', err);

    } finally {
      setLoading(false)
    }

  }


  console.log("error has occured ::", error)

  return (
    <View
      style={styles.container}>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.inputContainer}
          placeholder="Search city..."
          placeholderTextColor="grey"
          value={city}
          onChangeText={setCity}
        />

        <TouchableOpacity style={styles.searchButton} onPress={handleSearch} disabled={loading}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>

        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {error && (
          <Text style={styles.errorText}>
            Error: {error}
          </Text>
        )}
      </View>

    </View>
  );
}


export default Homepage