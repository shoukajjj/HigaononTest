import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const DictionaryApp = ({ onWordClick }) => {

  const dictionaryData = [
    { word: 'tangila', pronounciation: "[taŋi'la]", tagalog: 'tainga', english: 'ear' },
    { word: 'mata', pronounciation: "['mata]", tagalog: 'mata', english: 'eye' },
    { word: 'kilay', pronounciation: "['kilaj]", tagalog: 'kilay', english: 'eyebrow' },
    { word: 'ngipən', pronounciation: "/'ŋipən/", tagalog: 'ngipin', english: 'tooth' },
    { word: 'lisən', pronounciation: "/'lisən/", tagalog: 'binti', english: 'leg' },
    { word: 'buhok', pronounciation: "/bu'hok/", tagalog: 'buhok', english: 'hair' },
    { word: 'bəlbəl', pronounciation: "/'bəlbəl/", tagalog: 'bulbol', english: 'pubic hair' },
    { word: 'alima', pronounciation: "['Ɂalima]", tagalog: 'kamay', english: 'hand' },
    { word: 'tunlo', pronounciation: "[tunlo']", tagalog: 'daliri', english: 'finger' },
  ];  

  const handleWordClick = (word) => {
    onWordClick(word); // Call the onWordClick function provided as a prop
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleWordClick(item.word)}>
      <View style={styles.itemContainer}>
        <View style={styles.wordContainer}>
          <Text style={styles.word}>{item.word}</Text>
          <Text style={styles.pronunciation}>{item.pronounciation}</Text>
        </View>
        <View style={styles.translationContainer}>
          <Text style={styles.translation}>Tagalog: {item.tagalog}</Text>
          <Text style={styles.translation}>English: {item.english}</Text>
        </View>
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

const styles = StyleSheet.create({
  itemContainer: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    flexDirection: 'col', // Arrange items horizontally
    justifyContent: 'space-between', // Align items with space between them
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  wordContainer: {
    flexDirection: 'row', // Arrange word and pronunciation horizontally
    alignItems: 'center', // Align items vertically
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pronunciation: {
    marginLeft: 10, // Add some spacing between word and pronunciation
    fontStyle: 'italic',
  },
  translationContainer: {
    alignItems: 'flex-start', // Align translation items to the right
  },
  translation: {
    marginLeft: 0, // Add some spacing between translations
  },
});

export default DictionaryApp;
