import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, RestaurantScreen} from '../screens';
import {TailwindProvider} from 'tailwindcss-react-native';
import {ApolloProvider} from '@apollo/client/react';
import client from '../apollo/client';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <ApolloProvider client={client}>
      <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </ApolloProvider>
  );
};

export default MainNavigator;
