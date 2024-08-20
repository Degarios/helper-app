import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import HelpDetailsCard from '../components/HelpDetailsCard';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={ tw`bg-yellow-400 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg` }>
        <Icon name='menu' color='white' />
      </TouchableOpacity>
      <View style={tw`bg-yellow-300 absolute top-16 mt-1 ml-72 right-8 z-50 p-3 rounded-full shadow-lg opacity-75`}>
        <Text style={tw`text-3xl font-extrabold w-7 h-7 px-1 text-white italic`}>H</Text>
      </View>
      <View style={tw`absolute top-16 mt-11 ml-72 right-8 z-50 p-3`}>
        <Text style={tw`text-3xl font-extrabold w-7 h-7 px-1 text-yellow-500 italic`}>0000</Text>
      </View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
            <Stack.Screen name="NavigateCard" component={ NavigateCard } options={{ headerShown: false }} />
            <Stack.Screen name="HelpDetailsCard" component={ HelpDetailsCard } options={{ headerShown: false }} />
        </Stack.Navigator>
      </View>
    </View>
  )
};

export default MapScreen;

const styles = StyleSheet.create({})  