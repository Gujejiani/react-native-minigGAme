import { StyleSheet, Text, View,ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'
import {useState} from 'react' 
import GameScreen from './screens/GamesScreen';
import Colors from './constants/colors'
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
  <LinearGradient colors={[Colors.accent500, Colors.primary800]}  style={styles.rootScreen}><ImageBackground style={styles.rootScreen} imageStyle={styles.backgroundImage} source={require('./assets/images/background.png')} resizeMode='cover'  ><SafeAreaView  style={styles.rootScreen}>{screen}</SafeAreaView></ImageBackground></LinearGradient>
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
