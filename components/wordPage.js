import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { createTables } from './database';
import preloadedData from '../assets/data.json';

const Wordpage = ({ onWordClick }) => {
  const [error, setError] = useState(null);
  const [words, setWords] = useState([]);

  useEffect(() => {
    // Create tables but do not preload data
    createTables()
      .then(() => setWords(preloadedData))  // Directly set the words from JSON data
      .catch(err => setError(err.message));
  }, []);

  // const handleWordClick = (word) => {
  //   navigation.navigate('DetailsPage', { word });
  // };

  return (
    <ScrollView>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}

      {words.map((word, index) => (
        <TouchableOpacity key={index} style={styles.bubble} onPress={() => onWordClick(word)}>
          <Text style={styles.word}>{word.word} </Text>
          <Text style={styles.phonetic}>{word.phonetic} </Text>
          <Text style={styles.partOfSpeech}>{word.part_of_speech} {word.definition} </Text>
          <Text> </Text>
         
          {/* <Text style={styles.translation}> Fi{word.fil} </Text>
          <Text style={styles.definition}> {word.eng}</Text>
          <Text style={styles.definition}> {word.bis}</Text> */}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bubble: {
    backgroundColor:'#e9d700',
    borderRadius:'40',
    borderWidth:1,
    borderColor:'#373A40',
    padding:15,
    marginTop:10,
    marginRight:20,
    marginLeft:20,
    marginBottom:10,
    flexWrap:'wrap',
    flexDirection:'row'
  },
  word: {
    fontWeight:'800'

  },
  partOfSpeech:{
    flexWrap:'wrap',
    fontStyle:'italic'

  }

  
})      




export default Wordpage;
