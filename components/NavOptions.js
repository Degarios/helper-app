import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: "123",
        title: "Help",
        image: "https://img.freepik.com/premium-vector/two-hands-with-heart-love-care-support-concept-giving-help-helping-hands-hand-reaching-out-help-give-hand-friendship-concept-flat-vector-isolated-white-background-blue-yellow-colors_683816-82.jpg?w=740",
        screen: "HelpScreen", 
    },
    {
        id: "456",
        title: "Get Help",
        image: "https://img.freepik.com/premium-vector/two-people-with-different-skin-color-holding-each-other-hand-white-background-flat-vector_463676-1366.jpg?w=740",
        screen: "GetHelpScreen",
    }
];

const NavOptions = () => {
    const navigation = useNavigation();
    // const origin = useSelector(selectOrigin);

  return (
    <FlatList 
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
        <TouchableOpacity 
        onPress={() => navigation.navigate(item.screen)}
        /*disabled={!origin}*/
        style={tw`p-2 pl-6 rounded-xl pb-8 pt-4 bg-yellow-600 shadow-2xl m-2 w-40`}
        >
            <View /*style={tw`${!origin && "opacity-20"}`}*/>
                <Image 
                    style={[ tw`rounded-2xl` , {
                        width: 120,
                        height: 120,
                        resizeMode: "stretch",
                        opacity: 0.79
                    }]}
                    source={{uri: item.image}}
                />
                <Text style={tw`mt-2 text-lg text-yellow-100 font-semibold`}>{ item.title }</Text>
                <Icon 
                style={tw`p-2 bg-yellow-500 rounded-full w-10 mt-4`}
                name='arrowright' color="white" type='antdesign' 
                />
            </View>
        </TouchableOpacity>
    )}
    />
  )
};

export default NavOptions;
