import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import HelpersCard from '../components/HelpersCard';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (  
    <SafeAreaView style={ [ tw`bg-yellow-300 h-full`, styles.androidView ] }>
      <View style={ tw`` }>
        <Text 
            style={
                    tw`text-4xl font-extrabold tracking-widest my-3 pt-5 pl-2 pb-10 text-white italic`
                  }  
        >
            Helper
        </Text>
        <NavOptions />
        <View style={ tw`items-center my-5` }>
            <Text style={ tw`text-yellow-500 pt-4 pb-1 font-medium text-3xl` }>About the app</Text>
            <Text style={ tw`text-yellow-100 text-base pt-3 px-3 border-t border-yellow-400` }>
                This is a project that is aimed to provide a support Platform
                that links people in need to willing helpers in the community.
                The data present represents
                how the app should feel using mock data.
            </Text>
        </View>
        <TouchableOpacity style={ tw`bg-red-500 py-3 m-3 rounded-xl` }>
            <Text 
                style={ tw`text-center text-white text-2xl font-semibold` }
                onPress={() => { navigation.navigate('LogInScreen');}}
            >
                Sign out
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    androidView: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
});