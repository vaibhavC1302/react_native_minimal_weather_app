import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        backgroundColor: '#8fe0ff'
    },

    contentContainer: {
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
        minHeight: screenHeight * 0.5,
        width: screenWidth * 0.8,
        borderRadius: 5
    },

    inputContainer: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: '5px',
        border: '1px solid black',
        fontSize: 18,
        width: '80%'
    },

    searchButton: {
        backgroundColor: '#008CBA',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: '5px',
        width: 100
    },
    searchButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
    InfoTitle: {
        fontSize: 24,
        fontWeight: "700"
    },
    InfoTempView: {
        flexDirection: "row"
    },
    InfoTemp: {
        fontSize: 18,
    },
    InfoConditionView: {
        alignItems: 'center',
    },
    humidityInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    }

})


export default styles