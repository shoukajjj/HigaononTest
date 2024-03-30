import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const DictionaryApp = ({ onWordClick }) => {
  
const dictionaryData = [
  { word: 'tangila', pronounciation: "[taŋi'la]",tagalog:'tainga',english:'ear' },
  { word: 'mata', pronounciation: "['mata]",tagalog:'mata',english:'eye' },
  { word: 'kilay', pronounciation: "['kilaj]", tagalog:'kilay',english:'eyebrow' },
  { word: 'ngipən', pronounciation: "/'ŋipən/",tagalog:'ngipin',english:'tooth' },
  { word: 'lisən', pronounciation: "/'lisən/",tagalog:'binti',english:'leg' },
  { word: 'buhok', pronounciation: "/bu'hok/",tagalog:'buhok',english:'hair' },
  { word: 'bəlbəl', pronounciation: "/'bəlbəl/",tagalog:'bulbol',english:'pubic hair' },
  { word: 'alima', pronounciation: "['Ɂalima]",tagalog:'kamay',english:'hand' },
  { word: 'tunlo', pronounciation: "[tunlo']",tagalog:'daliri',english:'finger' },
];

  // const handleWordClick = (word) => {
  //   onWordClick(word);
  //   // You can perform other actions here when a word is clicked
  // };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleWordClick(item.word)}>
      <View style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 10, paddingBottom: 10, marginTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.word}</Text>
        <Text>{item.pronounciation}</Text>
        <Text>{item.tagalog}</Text>
        <Text>{item.english}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={dictionaryData}
        renderItem={renderItem}
        keyExtractor={(item) => item.word}
      />
    </View>
  );
};

export default DictionaryApp;

