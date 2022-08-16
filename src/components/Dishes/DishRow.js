import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid';
import {useBasketStore} from '../../store';
import {selectQuantity} from '../../store/basketStore';
import {mainColor} from '../../utils/constants';
import {fromUrl} from '../../utils/utils';

const DishRow = ({id, title, imageUrl, short_desc, price}) => {
  const [isPressed, setPress] = useState(false);
  const {addItem, removeItem} = useBasketStore(state => state);

  const quantity = useBasketStore(state => selectQuantity(id, title, state));
  const isDisabled = quantity === 0;

  return (
    <>
      <TouchableOpacity
        className={`bg-white border p-4 border-gray-200 ${
          isPressed ? 'border-b-0' : ''
        }`}
        onPress={() => setPress(prev => !prev)}>
        <View className="flex-row">
          <View className="flex-1">
            <Text className="text-lg mb-1">{title}</Text>
            <Text className="text-gray-400">{short_desc}</Text>
            <Text className="text-gray-400 mt-2">$ {price}</Text>
          </View>
          <View>
            <Image
              source={{uri: fromUrl(imageUrl)}}
              className="h-20 w-20 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={() => removeItem(id, title, price)}
              disabled={isDisabled}>
              <MinusCircleIcon
                size={40}
                color={isDisabled ? 'gray' : mainColor}
              />
            </TouchableOpacity>
            <Text>{quantity ? quantity : 0}</Text>
            <TouchableOpacity onPress={() => addItem(id, title, price)}>
              <PlusCircleIcon size={40} color={mainColor} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
