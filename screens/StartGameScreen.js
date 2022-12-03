import {TextInput, View, StyleSheet, Alert} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import {useState} from 'react'


function StartGameScreen(){

    const [enteredNumber, setEnteredNumber] = useState('')


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
    }


 return <View style={styles.inputContainer} >
    <TextInput style={styles.numberInput} onChangeText={numberInputHandler} value={enteredNumber} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false} />
    <View style={styles.buttonsContainer}>
   <View style={styles.buttonContainer} ><PrimaryButton >Reset</PrimaryButton></View>
   <View style={styles.buttonContainer} ><PrimaryButton onPress={confirmInput} >Confirm</PrimaryButton></View>
    </View>
   
 </View>
}



const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#72063c',
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0, height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
      height: 50,
      fontSize: 32,
      borderBottomColor: '#ffb62f',
      borderBottomWidth: 2,
      color: '#ffb62f',
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