import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
// import { Icon } from '@rneui/base'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: "123",
        icon: "home",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKYfXviSl-NSmyToV3-73rUxi8UThdLk6aJNOnZtgvHF0v4HOXquQgIQQ37H5a7qfSKbJAr003uz74dOZuogEuhL0LShE9-3kY33pSWVy3c-MAdAhc6v2OVBTRjEQPWBr_YC3tWgPvMhAbZl1JtZADD71HQqwNX4zsv-zH4mfi2I5q908fNL8UtZ-Z/w400-h400/Instagram%20Profile%20Picture%20(20).jpg",
        userName: "@home4me",
        description: "I need a baby sitter, my seven...",
        task: "One time task",
        highlight: "purple"
    },
    {
        id: "456",
        icon: "briefcase",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgB0ZnoWDOweup7I0sZqfpiiwNqZUoyXO9rvspQVDAtej4PC7ni_hq-vyYVPwDYiVvbOQcu-YcrvKj__877SVD-i8dat3X4D2VVuPxFDs0rwNSm9HiPsezWUmSEABxkQyM819oSwsizUTCuLpxMftWcFu8JiPc2CGsUAmqwGa9lTU4jjDNIVq1zZBaQ/w400-h400/Instagram%20Profile%20Picture%20(6).jpg",
        userName: "@westappeal",
        description: "I need help with my groceries...",
        task: "Material needs",
        highlight: "red"
    }
]

const HelpersCard = () => {
    const navigation = useNavigation();

  return (
    <FlatList 
        style={tw`bg-yellow-600 py-2`}
        data={data}
        keyExtractor={( item ) => item.id } 
        ItemSeparatorComponent={() => (
            <View style={[ tw`bg-yellow-800`, { height: 0.5} ]} />
        )}
        renderItem={({ item : { userName, description, image, task, highlight}}) => (
            <TouchableOpacity onPress={() => navigation.navigate('HelpDetailsCard')} style={ tw`flex-row items-center p-5` }>
                <Image 
                    style={[ tw`mr-4 rounded-full p-3` , 
                        {
                            width: 60,
                            height: 60,
                            resizeMode: "stretch",
                        }
                    ]}
                    source={{ uri: image }}
                />
                <View>
                    <Text style={ tw`font-semibold text-lg text-yellow-100` }>{ userName }</Text>
                    <Text style={ tw`text-yellow-200` }>{ description }</Text>
                    <Text style={ tw`text-yellow-400` }>{ task }</Text>
                    <View style={[ tw`bg-${ highlight }-600 absolute ml-40 right-16 z-50 p-2 rounded-full`, { marginTop: 42 } ]}></View>
                </View>    
            </TouchableOpacity>
        )}
    />
  )
}

export default HelpersCard

const styles = StyleSheet.create({})
