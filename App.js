import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={{color: '#ff1493', fontSize:30}}>EATURK</Text>
      <Text style={{color: '#000000', fontSize:30}}>EATURKS</Text>
      <Text style={{color: '#00cd00', fontSize:30}}>TURKSS</Text>
      

      
      <StatusBar style="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#97ffff',
    alignItems: 'center',
    justifyContent: 'center',
  }})