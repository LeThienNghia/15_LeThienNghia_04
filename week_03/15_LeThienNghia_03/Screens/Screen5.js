import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, style, Button } from 'react-native';
export default function App() {
    return (
        <View style = {styles.container}>
            <View>
                <Text style = {{
                    top: 40,
                    fontWeight: 'bold',
                    fontSize: 30,
                    fontStyle: 'Roboto',
                    textAlign: 'center',
                }}>LOGIN</Text>
            </View>
            <View>
                <View style={{
                    alignItems: 'center',
                    top: 100,
                    
                }}>
                    <TextInput style = {{
                        height: 60,
                        width: 355,
                        border: 'none',
                        backgroundColor: '#cae1d1',
                        top: 300,
                        fontSize: 22,
                        color: 'black',
                        fontStyle: 'Roboto',
                    }} placeholder='    Email'></TextInput>
                </View>
                <View style={{
                    alignItems: 'flex-start',
                    top: 140,
                    marginLeft: 18,
                }}>
                    <TextInput style = {{
                        height: 60,
                        width: 355,
                        border: 'none',
                        backgroundColor: '#cae1d1',
                        fontSize: 22,
                        color: 'black',
                        fontStyle: 'Roboto',
                    }} placeholder='    Password'></TextInput>
                </View>
                <View style = {{
                     alignItems: 'flex-end',
                     top: 85,
                     marginRight: 40,
                }}>
                <Image source={{
                    uri: "https://www.svgrepo.com/show/514119/eye.svg",
                }} style = {{
                    width: 50,
                    height: 50,
                    
                }}> 
                    </Image>
                </View>
            </View>
            <View style={{
                top: 160,
                alignItems: 'center',
            }}>
                <button style = {{
                    height: 50,
                    width: 355,
                    border: 'none',
                    backgroundColor: '#c34e3b'
                }}>
                    <Text style = {{
                        fontWeight: 'bold',
                        fontSize: 20,
                        fontStyle: 'Roboto',
                        textAlign: 'center',
                        color: 'white'
                    }}>LOGIN</Text>
                </button>
            </View>
            <View style = {{
                top: 180,
                alignItems: 'center',
            }}>
                <Text style = {{
                    fontSize: 15,
                    fontStyle: 'Roboto',
                    color: 'black'
                }}>When you agree to terms and conditions</Text>
                <Text style = {{
                    fontSize: 15,
                    fontStyle: 'Roboto',
                    color: '#5d25fa',
                    top: 10,
                }}>For got your password?</Text>
                <Text style = {{
                    fontSize: 15,
                    fontStyle: 'Roboto',
                    color: 'black',
                    top: 20,
                }}>Or login with</Text>
            </View>
            <View style = {{
                top: 230,
                flexDirection: 'row',
                justifyContent: 'center',
                marginHorizontal: 20,              
            }}>
                <TouchableOpacity style={{
                    backgroundColor: '#4267B2',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image style={{
                        width: 50,
                        height: 50
                    }} source={require('../img/icofacebook-19245101.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: '#1493c6',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image style={{
                        width: 30,
                        height: 30,
                        alignItems: 'center',
                    justifyContent: 'center',
                    }} source={require('../img/icozalo.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderColor: '#1493c6',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0058d9',
                }}>
                    <Image style={{
                        width: 30,
                        height: 30
                    }} source={require('../img/icogoogle1.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8efdf',
    },
})