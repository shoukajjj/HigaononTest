import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const DictionaryApp = ({ onWordClick }) => {

  const dictionaryData = [
    { word: "taŋi'la", pronounciation: "[taŋi'la]", tagalog: 'tainga', english: 'ear' , sentence1: "Ma'sakit su talikə'dan ku. ", sentence2: "Masakit ang likod ko.",gerund:"Noun"},
    { word: 'mata', pronounciation: "['mata]", tagalog: 'mata', english: 'eye', sentence1: "Ada'gi su mata nu.", sentence2: "Malaki ang mata mo." ,gerund:"Noun"},
    { word: 'kilaj', pronounciation: "['kilaj]", tagalog: 'kilay', english: 'eyebrow', sentence1: "Maitəm su 'kilay nu.", sentence2: "Maitim ang kilay mo" ,gerund:"Noun"},
    { word: 'ngipən', pronounciation: "/'ŋipən/", tagalog: 'ngipin', english: 'tooth', sentence1: "Ma'sakit su talikə'dan ku. ", sentence2: "Masakit ang likod ko." ,gerund:"Noun"},
    { word: 'lisən', pronounciation: "/'lisən/", tagalog: 'binti', english: 'leg', sentence1: "Ma'sakit su talikə'dan ku. ", sentence2: "Masakit ang likod ko." ,gerund:"Noun"},
    { word: 'buhok', pronounciation: "/bu'hok/", tagalog: 'buhok', english: 'hair', sentence1: "Ma'sakit su talikə'dan ku. ", sentence2: "Masakit ang likod ko." ,gerund:"Noun"},
    { word: 'bəlbəl', pronounciation: "/'bəlbəl/", tagalog: 'bulbol', english: 'pubic hair', sentence1: "Ma'sakit su talikə'dan ku. ", sentence2: "Masakit ang likod ko." ,gerund:"Noun"},
    { word: 'alima', pronounciation: "['Ɂalima]", tagalog: 'kamay', english: 'hand' , sentence1: "Ma'sakit su talikə'dan ku. ", sentence2: "Masakit ang likod ko.",gerund:"Noun"},
    { word: 'tunlo', pronounciation: "[tunlo']", tagalog: 'daliri', english: 'finger', sentence1: "Ma'sakit su talikə'dan ku. ", sentence2: "Masakit ang likod ko." ,gerund:"Noun"},
  ];  

  const handleWordClick = (item) => {
    onWordClick(item); 
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleWordClick(item)}>
      <View style={styles.itemContainer}>
        <View style={styles.wordContainer}>
          <Text style={styles.word}>{item.word}</Text>
          <Text style={styles.pronunciation}>{item.pronounciation}</Text>
        </View>
        <View style={styles.translationContainer}>
          <Text style={styles.translation}>Filipino: {item.tagalog}</Text>
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