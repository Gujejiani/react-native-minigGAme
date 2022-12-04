import {Text, View, StyleSheet, Alert, FlatList} from 'react-native'
import {Ionicons} from 'expo-vector-icons'
import {useState, useEffect} from 'react'
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogITem';
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  let minBoundary =1;
  let maxBoundary =100;
function GameScreen({userNumber, onGameOver}){
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])
    useEffect(()=>{
      console.log(currentGuess, userNumber)
      if(currentGuess === userNumber){
        onGameOver(guessRounds.length)
      }
    }, [currentGuess, userNumber, onGameOver])


    useEffect(()=>{
      minBoundary =1;
      maxBoundary= 100;
    }, [])

    function nextGuessHandler(direction){
      if(direction ==='lower' && currentGuess < userNumber || direction==='greater' && currentGuess> userNumber){
       Alert.alert("Don't lie!", "You know that this is wrong...", [{text: 'Sorry', style: 'cancel'}])
        return
      }

      if(direction ==='lower'){
        maxBoundary =currentGuess
      }else {
        minBoundary = currentGuess +1
      }
      const newRndNumber=   generateRandomBetween(minBoundary, maxBoundary, currentGuess)
      setCurrentGuess(newRndNumber)
      setGuessRounds((prev)=> [newRndNumber,...prev])
    }

    const guessRoundsLength = guessRounds.length
    return <View style={styles.screen} ><Title>Opponent's guess</Title><NumberContainer>{currentGuess}</NumberContainer><Card><InstructionText style={styles.instructionText} >
        Higher or lower</InstructionText ><View style={styles.buttonsContainer}><View style={styles.buttonContainer} ><PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')} ><Ionicons name='md-remove' size={24} color="white" /></PrimaryButton></View><View style={styles.buttonContainer}  ><PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name='md-add' size={24} color="white" /></PrimaryButton></View></View></Card><View  style={styles.listContainer}>
          {/* {guessRounds.map(guess=>{
            return <Text key={guess} >{guess}</Text>
          })} */}
          <FlatList data={guessRounds} keyExtractor={(item)=> item}  renderItem={({item, index, sep})=> <GuessLogItem roundNumber={guessRoundsLength -index} guess={item}  />} />
          </View></View>
}


export default GameScreen




const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        alignItems: 'center'
    },
    buttonsContainer :{
      flexDirection: 'row'
    },
    buttonContainer: {
      flex: 1
    },
    instructionText: {
      marginBottom: 12
    },
    listContainer: {
      flex:1 ,
      padding: 16
    }

   
})