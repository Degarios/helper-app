import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'


const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },{
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    }
]

// If we have SURGE pricing, this goes up
const SURGE_cHARGE_RATE = 1.5;

const HelpDetailsCard = () => {
    const navigation = useNavigation();
    const [ selected, setSelected ] = useState(null);
    const travelTimeInfromation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={ tw`bg-yellow-300 rounded-t-2xl flex-grow justify-evenly` }> 
      <View>
        <Text style={ tw`text-center text-yellow-100 py-5 text-2xl font-extrabold` }>@ahappyplace</Text>
      </View>

      <View>
        <Image 
                style={[ tw`rounded-full mb-3 self-center` , 
                {
                    width: 100,
                    height: 100,
                    resizeMode: "stretch",
                }
            ]}
            source={{ uri: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKfcqf6me6gc8fF6bfhrHo1LgZhD4Leez-eJBDbBieYKN2wZKKXRrZ6AEvl5PR4DTRgMz-dq8_W5puI4l34rJhcSbK1qJLlixh4mY9vTsUYvnRdTfJxWOl13FCBINeAuT7ro2j56aughAWVRwHs8401nEi1-VFLjGxzCc7glHopw3AVm47vwDd0llI/w400-h400/Instagram%20DP%20Images%20(16).jpg" }}
        />
        <View>
            <Text style={ tw`self-center text-yellow-500 mb-2 text-xl font-semibold` }>Description</Text>
            <Text style={ tw`text-white px-1 font-bold` }>I'm running late on food stuff and won't be able to make it to WallMart on time. I need someone to do grocery Shopping for me.</Text>
        </View>
      </View>
      
      <View style={ tw`mt-auto border-t border-yellow-400` }>
        <TouchableOpacity style={ tw`bg-green-400 py-3 m-3 rounded-xl` }>
            <Text 
                style={ tw`text-center text-white text-2xl font-semibold` }
                onPress={() => Alert.alert("Thank you", "You have accepted to help @ahappyplace", [{ text: "OK", onPress: () => navigation.navigate('HomeScreen')}])}
            >
                Help
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HelpDetailsCard

const styles = StyleSheet.create({})