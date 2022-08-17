import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {BasketHeader, BasketSummary} from '../components';

const BasketScreen = ({route}) => {
  const {id} = route.params;

  return (
    <SafeAreaView className="bg-gray-100 flex-1">
      <BasketHeader />
      <BasketSummary id={id} />
    </SafeAreaView>
  );
};

export default BasketScreen;
