import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.center}></View>
      <View style={styles.bottom}></View>
      
     
       
       
      
      
     

      
      <StatusBar style="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //width: '100%',
    //height :'100%',
    flex:1,
    backgroundColor: '#97ffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
  top:{

flex:4,
width:'100%',
backgroundColor:'blue',

  },

  center: {
    
    width:250,
flex:1,
backgroundColor:'purple',

  },

  bottom:{
    flex:1,
    width:'100%',
    backgroundColor:'gray',
  }


})