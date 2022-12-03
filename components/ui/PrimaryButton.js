import { Pressable, Text, View, StyleSheet} from "react-native"
import Colors from "../../constants/colors"


function PrimaryButton(props){
   function pressHandler(){
      props.onPress()
      console.log('pressed')
   }
   return <View style={styles.buttonOuterContainer} ><Pressable style={({pressed})=> pressed? [styles.buttonInnerContainer, styles.pressed]: styles.buttonInnerContainer} android_ripple={{color: Colors.primary600}} onPress={pressHandler}><Text style={styles.buttonText} >{props.children}</Text></Pressable></View>
}








export default PrimaryButton

const styles = StyleSheet.create({
      buttonOuterContainer: {
         
       
         overflow: 'hidden'
      },
      buttonInnerContainer: {
         backgroundColor: Colors.primary500,
         paddingVertical: 8,
         paddingHorizontal: 16,
         elevation: 2,
         borderRadius: 28,
         margin: 4,
      },
      buttonText: {
         color: 'white',
         textAlign: 'center'
      },
      pressed: {
         opacity: 0.75
      }
    
})