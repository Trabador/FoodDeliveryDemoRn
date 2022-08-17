import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {FlatList} from 'react-native';
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
      <FlatList
        contentContainerStyle={{paddingBottom: 150}}
        ListHeaderComponent={
          <RestaurantHeader
            imgUrl={imgUrl}
            title={title}
            rating={rating}
            genre={genre}
            address={address}
            short_description={short_description}
            navigation={navigation}
          />
        }
        ListFooterComponent={<Dishes id={id} name={title} />}
      />
    </SafeAreaView>
  );
};

export default RestaurantScreen;
