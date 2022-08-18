import React from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Order = () => {
  return (
    <View>
      <Animatable.Image
        className="h-52 w-56"
        source={require('../../../assets/food.gif')}
        animation="slideInUp"
        iterationCount={1}
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-white font-extrabold text-2xl text-center mt-3">
        Preparing your order ...
      </Animatable.Text>
    </View>
  );
};

export default Order;
