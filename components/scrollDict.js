import React from 'react';
import { View, Text, FlatList } from 'react-native';

const DictionaryApp = () => {
  // Sample data
  const dictionaryData = [
    { word: 'tangila', pronounciation: "[taŋi'la]",tagalog:'tainga',english:'ear' },
    { word: 'tangisa', pronounciation: "[taŋi'la]",tagalog:'tainga',english:'ear' },
  ];

  const renderItem = ({ item }) => (
    <View style={{ paddingLeft: 100,paddingRight:100,paddingTop:10,paddingBottom:10,borderWidth:1,
    borderRadius:10,borderColor:'black'}}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.word}</Text>
      <Text>{item.pronounciation}</Text>
      <Text>{item.tagalog}</Text>
      <Text>{item.english}</Text>
    </View>
  );

  return (
    <FlatList
      data={dictionaryData}
      renderItem={renderItem}
      keyExtractor={(item) => item.word}
    />
  );
};

export default DictionaryApp;