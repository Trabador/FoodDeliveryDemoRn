import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {mainColor} from '../utils/constants';
import {Order} from '../components';

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
      <Order />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
