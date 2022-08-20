import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {RestaurantsList} from '../components';
import {mainColor} from '../utils/constants';

const RestaurantsScreen = ({route}) => {
  const {id, title} = route.params;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-gray-100">
      <View className="relative py-5 bg-white justify-center items-center">
        <Text className="font-bold text-xl">{title} Restaurants</Text>
        <TouchableOpacity
          className="absolute top-3 left-2 bg-gray-300 rounded-full px-2 py-2"
          onPress={navigation.goBack}>
          <ArrowLeftIcon color={mainColor} size={22} />
        </TouchableOpacity>
      </View>

      <RestaurantsList id={id} />
    </SafeAreaView>
  );
};

export default RestaurantsScreen;
