import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const LogInScreen = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    // THE EMAIL AND PASSWORD TO LOG INTO THE APP.
    const user = "admin@admin.com"
    const userPass = "admin"

    const navigation = useNavigation()
    
  return (
    <View style={ tw`flex-1 justify-center bg-yellow-300` }>
      <Text 
            style={
                    tw`text-4xl font-extrabold tracking-widest my-3 pl-2 pb-10 text-white italic`
                  }  
      >
            Helper
      </Text>
      <View style={toInputBoxStyles.container}>
      <TextInput 
        placeholder='Email'
        value={ email }
        onChangeText={text => setEmail(text) }
        style={[toInputBoxStyles.textInput, toInputBoxStyles.textInputContainer]}
      />
      <TextInput 
        placeholder='Password'
        value={password}
        onChangeText={ text => setPassword(text) }
        secureTextEntry
        style={[toInputBoxStyles.textInput, toInputBoxStyles.textInputContainer]}
      />
      </View> 

      <View>
        <TouchableOpacity style={ tw`bg-yellow-600 py-3 m-3 rounded-xl` }>
            <Text 
                style={ tw`text-center text-white text-2xl font-semibold` }
                onPress={() => {
                                email == user && password == userPass ? navigation.navigate('HomeScreen') : alert("Incorrect email or password")
                            
                                // console.log("***" + email + "*** ***" + password +"***")
                        }}
            >
                Login
            </Text>
        </TouchableOpacity>
      </View>
    </View> 
  )
}

export default LogInScreen

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