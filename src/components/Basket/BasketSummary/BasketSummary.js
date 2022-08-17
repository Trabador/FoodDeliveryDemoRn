import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useBasketStore} from '../../../store';
import {selectRestaurant} from '../../../store/basketStore';
import {selectTotal} from '../../../store/basketStore';
import {deliveryFee, mainColor} from '../../../utils/constants';
import BasketSummaryRow from './BasketSummaryRow';

const BasketSummary = ({id}) => {
  const restaurant = useBasketStore(state => selectRestaurant(id, state))[0];
  const totalAmount = useBasketStore(state => selectTotal(id, state));
  const removeOrder = useBasketStore(state => state.removeOrder);
  const navigation = useNavigation();
  const grandTotal = totalAmount + deliveryFee;

  if (!restaurant) return;

  if (restaurant.dishes.length === 0)
    return (
      <View className="flex-1  h-full items-center justify-center">
        <Text className="font-extrabold text-2xl">No Items</Text>
      </View>
    );

  const renderSumaryRow = ({item}) => <BasketSummaryRow dish={item} id={id} />;

  const handlePlaceOrder = () => {
    navigation.navigate('PreparingOrder');
    removeOrder(id);
  };

  return (
    <>
      <View className="bg-white mt-5 mb-2 mx-2 p-3 flex-1">
        <Text className="font-bold text-lg">{restaurant.name}</Text>
        <FlatList
          data={restaurant.dishes}
          renderItem={renderSumaryRow}
          keyExtractor={item => item.title}
        />
      </View>
      <View className="bg-white p-5  mb-1">
        <View className="flex-row justify-between">
          <Text className="text-gray-500">Subtotal</Text>
          <Text className="text-gray-500">$ {totalAmount.toFixed(2)}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-500">Delivery fee</Text>
          <Text className="text-gray-500">$ {deliveryFee.toFixed(2)}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-extrabold text-lg">Order Total</Text>
          <Text className="font-extrabold text-lg">
            $ {grandTotal.toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          onPress={handlePlaceOrder}
          className="rounded-lg p-4"
          style={{backgroundColor: mainColor}}>
          <Text className="text-white text-center text-md font-semibold">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BasketSummary;
