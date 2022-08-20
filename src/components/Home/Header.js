import React from 'react';

import {Image, View, Text} from 'react-native';

import {ChevronDownIcon, UserIcon} from 'react-native-heroicons/outline';
import {mainColor} from '../../utils/constants';

const Header = () => {
  return (
    <View className="flex-row pb-3 items-center space-x-2 pt-3 px-2 bg-white">
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png',
        }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Food Delivery</Text>
        <Text className="font-bold text-xl">
          Welcome User <ChevronDownIcon size={20} color={mainColor} />
        </Text>
      </View>
      {/* <UserIcon size={35} color={mainColor} /> */}
    </View>
  );
};

export default Header;
