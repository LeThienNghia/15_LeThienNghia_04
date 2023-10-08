import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.contentLockIcon}>

                <Image source={{
                    uri: "https://www.svgrepo.com/show/99424/lock.svg",
                }} style={styles.lockIcon} />
            </View>
            <View style={styles.header}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>FORGET</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>PASSWORD</Text>
            </View>
            <View style={styles.subHeader}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Provide your account's email for which you</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>want to reset your password</Text>
            </View>
            <View style={styles.contentInputEmail}>
                <Image style={{ height: 30, width: 30, backgroundColor: '#BEBEBE' }} source={{ uri: "https://cdn-icons-png.flaticon.com/512/542/542638.png" }}></Image>
                <TextInput style={styles.inputEmail} placeholder='  Email'></TextInput>
            </View>

            <View style={styles.contentButton}>
                <button style={styles.button} onPress={() => alert('Button clicked')}>
                    <Text style={{ color: 'black', fontSize: 15,fontWeight:'bold' }}>NEXT</Text>
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
    contentLockIcon: {
        height: 240,
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lockIcon: {
        width: 150,
        height: 150,
    },
    header: {
        height: 90,
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subHeader: {
        height: 70,
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentInputEmail: {
        height: 50,
        backgroundColor: '#BEBEBE',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 35,
        marginLeft: 20,
        marginRight: 20,
    },
    inputEmail: {
        width: 300,
        height: 40,
        backgroundColor: '#BEBEBE',

    },
    contentButton: {
        height: 100,
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#FFCC00',
        width: 350,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
    },
});