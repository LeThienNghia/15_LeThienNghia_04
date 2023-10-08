import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, style, Button } from 'react-native';
export default function App(){
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.headerTitle}>REGISTER</Text>
            </View>
            <View style = {styles.contentInput}>
                <TextInput style = {styles.Input} placeholder='  Name'></TextInput>
                <TextInput style = {styles.Input} placeholder='  Phone'></TextInput>
                <TextInput style = {styles.Input} placeholder='  Email'></TextInput>
                <TextInput style = {styles.Input} placeholder='  Password'></TextInput>

                {/* <View style = {styles.password}>
                    <TextInput style = {styles.Input} placeholder='  Password'></TextInput>
                    <Image source={{
                        uri: "https://www.svgrepo.com/show/514119/eye.svg",
                    }} style = {styles.imagePassword}> 
                    </Image>
                </View> */}
                <TextInput style = {styles.Input} placeholder='  Birthday'></TextInput>
                <View style={styles.radioWrapper}>
                    <View style={styles.circle}></View>`
                    <Text style={styles.sex}>Male</Text>
                    <View style={styles.circle}></View>
                    <Text style={styles.sex}>Female</Text>`
                </View>
            </View>
            <View style = {styles.contentFooter}>
                <TouchableOpacity style={styles.contentButton}>
                    <Text style={styles.button}>REGISTER</Text>
                </TouchableOpacity>
                <Text style={styles.textFooter}>When you agree to terms and conditions</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#d8efdf',
    },
    header:{
        flex: 1.5,
    },
    headerTitle:{
        top: 40,
        fontWeight: 'bold',
        fontSize: 30,
        fontStyle: 'Roboto',
        textAlign: 'center',
    },
    contentInput: {
        flex: 6,
        
    },
    Input: {
        backgroundColor: "#cae1d1",
        height: 80,
        margin: 10,
        fontSize: 20,
    },
    imagePassword: {
        height: 30,
        width: 30,
        alignContent: 'flex-end',
    },
    radioWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10,
    },
    circle: {
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        width: 20,
        height: 20,
        marginTop: 20,
        marginLeft: 20,
    },
    sex: {
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        marginTop: 20,
        marginLeft: 10,
    },
    contentFooter: {
        flex: 2.5
    },
    contentButton: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'Roboto',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'red',
        height: 50,
        margin: 10,
    },
    textFooter:{
        flex: 1,
        textAlign: 'center',
    }
})