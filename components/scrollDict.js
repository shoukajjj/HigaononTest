import React from 'react';
import { View, Text, FlatList } from 'react-native';

const DictionaryApp = () => {

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

  const renderItem = ({ item }) => (
    <View style={{ paddingLeft: 100,paddingRight:100,paddingTop:10,paddingBottom:10,borderWidth:1,
    borderRadius:10,borderColor:'black',marginTop:10}}>
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