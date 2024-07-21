import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput,StyleSheet} from 'react-native';
import { createTables} from './database';
import preloadedData from '../assets/data.json';

const Wordpage = () => {
  const [error, setError] = useState(null);
  const [words, setWords] = useState([]);
  const [word, setWord] = useState('');
  const [part_of_speech, setGerund] = useState('');
  const [translation, setTranslation] = useState('');
  const [definition, setDefinition] = useState('');
  const [phonetic, setPhonetic] = useState('');
  const [example, setExample] = useState('');
  const [translationExample, setTranslationExample] = useState('');

  useEffect(() => {
    // Create tables but do not preload data
    createTables()
      .then(() => setWords(preloadedData))  // Directly set the words from JSON data
      .catch(err => setError(err.message));
  }, []);


  return (
    <View>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}

      {words.map((word, index) => (
        <View key={index}>
          <Text>{word.word}</Text>
          <Text>{word.part_of_speech}</Text>
          <Text>{word.translation}</Text>
          <Text>{word.definition}</Text>
          <Text>{word.phonetic}</Text>
          <Text>{word.example}</Text>
          <Text>{word.translation_example}</Text>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {

  }
})      
export default Wordpage;
