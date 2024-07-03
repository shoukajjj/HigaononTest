import * as React from 'react';
import { useEffect,useState } from 'react';
import { StyleSheet, TextInput, View, Text, SafeAreaView, Button, ActivityIndicator, FlatList } from 'react-native';
import { createTables, insertWord, getWords } from './components/database';
import Navigation from './components/nav/navigation';


function App() {
  useEffect(() => {
    // Create the database tables
    createTables()
      .then(() => {
        // Insert initial data
        const words = [
          { word: 'example', translation: 'ejemplo', definition: 'a representative form or pattern', phonetic: 'ɪɡˈzæmpəl', example: 'This is an example sentence.', translation_example: 'Esta es una oración de ejemplo.' },
          // Add more words as needed
        ];

        words.forEach(({ word, translation, definition, phonetic, example, translation_example }) => {
          insertWord(word, translation, definition, phonetic, example, translation_example)
            .then(() => console.log(`Inserted word: ${word}`))
            .catch(error => console.error(`Error inserting word: ${word}`, error));
        });
      })
      .catch(error => console.error('Error creating tables', error));
  }, []);

  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  nav: {
    width: '90%',
    height: '100%'
  },
  input: {
    width: '70%',
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default App;
