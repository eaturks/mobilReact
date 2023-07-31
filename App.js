import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>eaturk</Text>
      <Text>turkea</Text>
      <Text>eaturk</Text>
      <Text>turk</Text>
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