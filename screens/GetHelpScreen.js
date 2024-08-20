import { StyleSheet, Text, View,TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'

const GetHelpScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={ tw`bg-yellow-300 h-full` }>
      <Text 
            style={
                    tw`text-4xl font-extrabold tracking-widest my-3 pt-5 pl-2 pb-10 text-white italic`
                  }  
      >
            Helper
      </Text>
      <View style={ tw`pt-10 pb-5` }>
        <Text style={ tw`text-yellow-100 px-3 pt-4 pb-1 font-medium text-2xl` }>What do you need help with?</Text>
        <TextInput 
          placeholder='A description of what you want help with'
          // value={}
          // onChangeText={}
          style={[toInputBoxStyles.textInput, toInputBoxStyles.textInputContainer]}
        />

        <Text style={ tw`text-yellow-100 px-3 pt-4 pb-1 font-medium text-2xl` }>What type of task?</Text>
        <TextInput 
          placeholder='Either one time task or material need'
          // value={}
          // onChangeText={}
          style={[toInputBoxStyles.textInput, toInputBoxStyles.textInputContainer]}
        />
      </View>
      <TouchableOpacity style={ tw`bg-yellow-600 py-3 m-3 rounded-xl` }>
            <Text 
                style={ tw`text-center text-white text-2xl font-semibold` }
                onPress={() => Alert.alert("Success", "Your help request has been made", [{ text: "OK", onPress: () => navigation.navigate('HomeScreen')}])}
            >
                Request help
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default GetHelpScreen

const toInputBoxStyles = StyleSheet.create({
  container: {
      backgroundColor: "transparent",
      paddingTop: 5,
      paddingBottom: 20,
      flex: 0,
  },
  textInput: {
      backgroundColor: "white",
      borderRadius: 10,
      fontSize: 18
  },
  textInputContainer: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginHorizontal: 8,
      marginTop: 8
  }
})