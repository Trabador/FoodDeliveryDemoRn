import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

const CategoryCard = ({id, imgUrl, title}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="relative mr-2 rounded "
      style={{
        shadowColor: 'gray',
        shadowRadius: 20,
        elevation: 20,
        backgroundColor: 'gray',
      }}
      onPress={() => navigation.navigate('Restaurants', {id, title})}>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded opacity-80"
      />
      <Text className="absolute bottom-0 inset-x-0 text-white font-semibold text-center bg-gray-600 rounded-b p-x-1 text-sm">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
