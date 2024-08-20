import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import HelpersCard from './HelpersCard'
import { Icon } from '@rneui/base'

const HelperslistCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView style={ tw`bg-yellow-600 rounded-t-2xl flex-1` }>
      <View style={tw`bg-yellow-300 rounded-2xl`}>
        <Text style={tw`text-center text-white italic py-5 text-xl`}>Hey there, Who would you like to help?</Text>
        <GooglePlacesAutocomplete 
                placeholder='Search location...'
                styles={toInputBoxStyles}
                fetchDetails={true}
                returnKeyType={"search"}
                minLength={2}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }} 
                onPress={( data, details = null ) => {
                    dispatch(
                        setDestination({
                        location: details.geometry.location,
                        description: data.description
                        })
                    );
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />
      </View>
      <View style={tw`flex-shrink`}>


        <HelpersCard />
      </View>
    </SafeAreaView>
  )
}

export default HelperslistCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        paddingTop: 5,
        paddingBottom: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})