import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {mainColor} from '../utils/constants';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigation.navigate('Delivery');
    }, 5000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <SafeAreaView
      style={{backgroundColor: mainColor}}
      className="flex-1 justify-center items-center">
      <Animatable.Image
        className="h-52 w-56"
        source={require('../../assets/deliver.gif')}
        animation="slideInUp"
        iterationCount={1}
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-white font-extrabold text-2xl text-center mt-3">
        Preparing your order ...
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
