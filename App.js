import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'
export default function App() {
  return (
  <LinearGradient colors={['#ffb62f', '#72063c']} style={styles.rootScreen}><StartGameScreen /></LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreen:{
    flex: 1,
   
  }
});
