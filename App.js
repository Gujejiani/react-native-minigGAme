import { StyleSheet, Text, View,ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'
import {useState} from 'react' 
import GameScreen from './screens/GamesScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
      setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen  onPickNumber ={pickedNumberHandler} />

  if(userNumber){
    screen = <GameScreen/>
  }
  return (
  <LinearGradient colors={['#ffb62f', '#72063c']}  style={styles.rootScreen}><ImageBackground style={styles.rootScreen} imageStyle={styles.backgroundImage} source={require('./assets/images/background.png')} resizeMode='cover'  ><SafeAreaView  style={styles.rootScreen}>{screen}</SafeAreaView></ImageBackground></LinearGradient>
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
