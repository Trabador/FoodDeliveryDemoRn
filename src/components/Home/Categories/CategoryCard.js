import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {mainColor} from '../../../utils/constants';

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity
      className="relative mr-2 rounded px-2 py-2"
      style={{
        shadowColor: 'gray',
        shadowRadius: 20,
        elevation: 20,
        backgroundColor: mainColor,
      }}>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded mb-2"
      />
      <Text className="absolute bottom-1 left-5 text-white font-bold text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
