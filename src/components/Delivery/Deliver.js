import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {darkerMainColor} from '../../utils/constants';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

const Deliver = () => {
  const navigation = useNavigation();

  return (
    <View className="items-center">
      <Animatable.Image
        source={require('../../../assets/deliver.gif')}
        className="h-52 w-56"
        animation="fadeInUp"
        iterationCount={1}
      />
      <Animatable.Text
        animation="fadeInUp"
        iterationCount={1}
        className="text-gray-600 text-2xl font-bold mt-3">
        Your order is ready to be delivered.
      </Animatable.Text>
      <Animatable.Text
        animation="fadeInUp"
        iterationCount={1}
        className="text-gray-500 text-semibold">
        Thank you for your purchase.
      </Animatable.Text>
      <Animatable.View animation="fadeInUp" iterationCount={1}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className=" px-16 py-3 mt-2 rounded-md"
          style={{backgroundColor: darkerMainColor}}>
          <Text className="font-bold text-white text-lg">Finish</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Deliver;
