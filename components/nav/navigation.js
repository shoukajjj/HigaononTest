import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './tabnavigator';
import DictionaryPage from './dictionarypage';
import WordPage from './wordpage';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Dictionary" component={DictionaryPage} />
      <Stack.Screen name="WordPage" component={WordPage} options={{ title: 'Word' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
