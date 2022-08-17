import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {XCircleIcon} from 'react-native-heroicons/solid';
import {mainColor} from '../../utils/constants';

const BasketHeader = () => {
  const navigation = useNavigation();

  return (
    <View
      className="relative bg-white pb-5"
      style={{shadowColor: 'gray', shadowRadius: 20, elevation: 20}}>
      <Text className="font-bold text-lg text-center pt-5">Basket</Text>
      <TouchableOpacity
        className="rounded-full absolute top-3 right-5"
        onPress={navigation.goBack}>
        <XCircleIcon color={mainColor} height={50} width={50} />
      </TouchableOpacity>
    </View>
  );
};

export default BasketHeader;
