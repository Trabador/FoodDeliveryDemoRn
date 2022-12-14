import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useBasketStore} from '../../store';
import {selectTotal, selectQuantityTotal} from '../../store/basketStore';
import {mainColor, darkerMainColor} from '../../utils/constants';

const BasketInfo = ({id}) => {
  const totalQty = useBasketStore(state => selectQuantityTotal(id, state));
  const totalAmount = useBasketStore(state => selectTotal(id, state));
  const navigation = useNavigation();

  if (totalQty === 0) return;

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        className="mx-4 flex-row items-center space-x-1 p-4"
        style={{backgroundColor: mainColor}}
        onPress={() => navigation.navigate('Basket', {id})}>
        <Text
          className="text-white font-extrabold text-lg px-2"
          style={{backgroundColor: darkerMainColor}}>
          {totalQty}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-white text-lg font-extrabold">
          $ {totalAmount}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketInfo;
