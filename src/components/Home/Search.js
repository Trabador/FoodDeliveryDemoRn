import React from 'react';
import {TextInput, View} from 'react-native';
import {AdjustmentsIcon, SearchIcon} from 'react-native-heroicons/outline';
import {mainColor} from '../../utils/constants';

const Search = () => {
  return (
    <View className="flex-row items-center space-x-2 pb-2 px-2 bg-white">
      <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1 items-center rounded">
        <SearchIcon size={20} color="gray" />
        <TextInput placeholder="Restaurants..." keyboardType="default" />
      </View>
      <AdjustmentsIcon color={mainColor} />
    </View>
  );
};

export default Search;
