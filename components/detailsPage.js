import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsPage = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.mainWord}>
        <Text style={styles.title}>{item.word}</Text>
        <Text style={styles.phonetic}>{item.phonetic}</Text>
        <Text style={styles.partOfSpeech}>{item.part_of_speech}</Text>
      </View>

      <Text style={styles.translation}>Filipino: {item.fil}</Text>
      <Text style={styles.translation}>English: {item.eng}</Text>
      <Text style={[styles.translation, styles.bisaya]}>Bisaya: {item.bis}</Text>
      <Text style={styles.example}>{item.example}</Text>
      <Text style={styles.translationExample}>{item.translation_example}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  mainWord: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  phonetic: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#888',
    marginLeft: 8,
    alignSelf: 'center', // Center the phonetic text vertically
  },
  partOfSpeech: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
    alignSelf: 'center', // Center the part of speech text vertically
  },
  translation: {
    fontSize: 16,
    marginBottom: 8,
  },
  bisaya: {
    marginBottom: 8,
  },
  example: {
    fontSize: 16,
    marginTop: 16,
  },
  translationExample: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 8,
  },
});

export default DetailsPage;
