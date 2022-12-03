import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'

export default function App() {
  return (
  <LinearGradient colors={['#ffb62f', '#72063c']}  style={styles.rootScreen}><ImageBackground style={styles.rootScreen} imageStyle={styles.backgroundImage} source={require('./assets/images/background.png')} resizeMode='cover'  ><StartGameScreen /></ImageBackground></LinearGradient>
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
   
  },
  backgroundImage: {
    opacity: 0.15
  }
});
