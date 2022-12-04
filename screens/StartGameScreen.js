import {TextInput, View, StyleSheet, Alert, Dimensions, useWindowDimensions} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import {useState} from 'react'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/card'
import InstructionText from '../components/ui/InstructionText'




function StartGameScreen(props){

    const [enteredNumber, setEnteredNumber] = useState('')

    const {width, height} = useWindowDimensions()

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }

    function resetInputHandler(){
        setEnteredNumber('')
    }


    function confirmInput(){
        const chosenNumber = parseInt(enteredNumber)

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >99){
        Alert.alert('invalid number', 'number has to be a number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
        )
        }
        props.onPickNumber(chosenNumber)

    }

const marginTop = height <380? 30: 100;

 return <View style={[styles.rootContainer, {marginTop}]} ><Title>Guess My Number</Title><Card  ><InstructionText  >Enter Number</InstructionText><TextInput style={styles.numberInput} onChangeText={numberInputHandler} value={enteredNumber} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false} /><View style={styles.buttonsContainer}>
   <View style={styles.buttonContainer} ><PrimaryButton >Reset</PrimaryButton></View>
   <View style={styles.buttonContainer} ><PrimaryButton onPress={confirmInput} >Confirm</PrimaryButton></View>
    </View>
   
 </Card></View> 
}


// const deviceHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight<380? 30: 100,
        alignItems: 'center'
    },
   
    numberInput: {
      height: 50,
      fontSize: 32,
      borderBottomColor: Colors.accent500,
      borderBottomWidth: 2,
      color: Colors.accent500,
      marginVertical: 8,
      fontWeight: 'bold',
      width: 50,
      textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})
// elevation for android

export default StartGameScreen