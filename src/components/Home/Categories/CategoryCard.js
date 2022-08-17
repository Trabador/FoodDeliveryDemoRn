import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity
      className="relative mr-2  bg-white rounded px-2 py-2"
      style={{shadowColor: 'gray', shadowRadius: 20, elevation: 20}}>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
