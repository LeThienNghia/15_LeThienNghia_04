
import { StyleSheet, Text, View, Button} from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contentCircle}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.header}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>GROW</Text>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>YOUR BUSINESS</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>We will help you to grow your business using </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>online server</Text>
      </View>
      <View style={styles.groupButton}>
        <button style={styles.subButton}><text style={{fontSize:20,fontWeight:'bold'}}>LOGIN</text></button>
        <button style={styles.subButton}><text style={{fontSize:20,fontWeight:'bold'}}>SIGN UP</text></button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCFF'
  },
  contentCircle: {
    height: 250,
    background: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: 'transparent',
    borderWidth: 15,
    borderColor: 'black',
  },
  header: {
    height: 160,
    background: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeader: {
    height: 80,
    background: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupButton: {
    height: 100,
    background: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
 
  subButton: {
    width: 130,
    height: 55,
    borderRadius: 15,
    backgroundColor: '#FFCC00',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    border: "none",
  },

});