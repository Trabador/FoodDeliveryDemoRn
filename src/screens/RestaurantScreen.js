import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BasketInfo, Dishes, RestaurantHeader} from '../components';

const RestaurantScreen = ({route}) => {
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    long,
    lat,
  } = route.params;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="relative h-full">
      <BasketInfo id={id} />
      <RestaurantHeader
        imgUrl={imgUrl}
        title={title}
        rating={rating}
        genre={genre}
        address={address}
        short_description={short_description}
        navigation={navigation}
      />
      <Dishes id={id} />
    </SafeAreaView>
  );
};

export default RestaurantScreen;
