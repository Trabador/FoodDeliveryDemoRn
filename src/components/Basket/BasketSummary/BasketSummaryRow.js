import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useBasketStore} from '../../../store';
import {mainColor} from '../../../utils/constants';

const BasketSummaryRow = ({dish, id}) => {
  const removeRow = useBasketStore(state => state.removeRow);

  if (dish.qty === 0) return;

  return (
    <View className="flex-row items-center pl-2 border-b-2 pb-1 border-gray-400">
      <Text className="font-bold text-md">{dish.qty} x </Text>
      <Image source={{uri: dish.url}} className="h-10 w-10 rounded-full" />
      <Text className="flex-1 text-md text-gray-400 mx-2">{dish.title}</Text>
      <Text>${parseFloat(dish.price * dish.qty).toFixed(2)}</Text>
      <TouchableOpacity>
        <Text
          className="text-xs ml-2"
          style={{color: mainColor}}
          onPress={() => removeRow(id, dish.title)}>
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketSummaryRow;
