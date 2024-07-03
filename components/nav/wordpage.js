import React from 'react';
import { View, Text } from 'react-native';

const WordPage = ({ route }) => {
  const { word } = route.params;

  return (
    <View>
      <Text>{word}</Text>
    </View>
  );
};

export default WordPage;