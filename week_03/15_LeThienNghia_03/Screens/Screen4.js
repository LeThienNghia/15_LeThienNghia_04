import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default function app() {
    return (
        <View style={styles.container}>
            <View>
                <Text style = {styles.title}>CODE</Text>
                <Text style = {styles.subTitle}>VERIFICATION</Text>
                <Text style = {styles.subTitle1}>Enter ontime password sent on</Text>
                <Text style = {styles.subTitle2}>++849092605798</Text>
            </View>
            <View style = {styles.contentInputCode}>
                <input style={styles.inputCode}></input>
                <input style={styles.inputCode}></input>
                <input style={styles.inputCode}></input>
                <input style={styles.inputCode}></input>
                <input style={styles.inputCode}></input>
                <input style={styles.inputCode}></input>
                
            </View>
            <View style={styles.contentButton}>
                <button style={styles.button} onPress={() => alert('Button clicked')}>
                    <Text style={{ color: 'black', fontSize: 18,fontWeight:'bold' }}>VERIFY CODE</Text>
                </button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)'
    },
    title: {
        fontSize: 70,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 113,
        fontStyle: 'Roboto',
        height: 70,
    },
    subTitle: {
        top: 195,
        fontSize: 23,
        lineHeight: 23.44,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'Roboto',
        height: 53,
        
    },
    subTitle1: {
        top: 220,
        fontSize: 16,
        lineHeight: 23.44,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'Roboto',
        height: 53,
    },
    subTitle2: {
        top: 187,
        fontSize: 16,
        lineHeight: 23.44,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'Roboto',
        height: 53,
    },
    contentInputCode: {
        flex: 1,
        top: 190,
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'inline-flex',
    },
    inputCode: {
        height: 48,
        width: 48,
        borderColor: 'black',
    },
    contentButton: {
        height: 150,
        background: 'transparent',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#FFCC00',
        width: 350,
        height: 50,
        alignItems: 'center',
        border: 'none',
    },

}
)