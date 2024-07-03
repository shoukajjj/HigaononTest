import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import { getWords } from '../database'; // Adjust import path as needed

function DictionaryPage({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [words, setWords] = useState([]);

  useEffect(() => {
    // Fetch words from the database on component mount
    const fetchWords = async () => {
      setLoading(true);
      try {
        const fetchedWords = await getWords();
        setWords(fetchedWords);
      } catch (error) {
        console.error('Error fetching words:', error);
      }
      setLoading(false);
    };

    fetchWords();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleWordClick = (word) => {
    navigation.navigate('WordPage', { word });
  };

  const renderItem = ({ item }) => (
    <Text style={styles.word} onPress={() => handleWordClick(item.word)}>
      {item.word}
    </Text>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={words}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Assuming id is unique
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  word: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  loading: {
    marginTop: 50,
  },
});

export default DictionaryPage;
