import {Text, View } from 'react-native';
import {styles}from './AppStyle';

export default function App() {


  return (
    <View style={styles.container}>
      
      <View style={styles.top}>
      <Text style={styles.title}>eaTurk</Text> 
      </View>
      <View style={styles.center}></View>
      <View style={styles.bottom}></View>  
    </View>
  );
}

