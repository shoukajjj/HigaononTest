import * as React from 'react';
import { useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, SafeAreaView, Button, ActivityIndicator, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/Feather';
import { createTables, insertWord, getWords } from './db';

function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [words, setWords] = useState([]);

  useEffect(() => {
    // Fetch words from the database on component mount
    const fetchWords = async () => {
      setLoading(true);
      try {
        const words = await getWords();
        setWords(words);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchWords();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          clearButtonMode="always"
          autoCapitalize="none"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <Button title="Search" onPress={() => console.log(searchQuery)} />
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={words}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Text>{item.word}</Text>}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

function DictionaryPage({ navigation }) {
  const handleWordClick = (word) => {
    navigation.navigate('WordPage', { word });
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <DictionaryApp onWordClick={(word) => handleWordClick(word)} />
      </View>
    </View>
  );
}

function WordPage({ route }) {
  const { word } = route.params;
  return (
    <View>
      <Text>{word}</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => {
          let labelColor = focused ? '#212121' : '#868383';
          let labelWeight = focused ? '900' : 'thin';

          return (
            <Text style={{ color: labelColor, fontSize: 16, fontWeight: labelWeight }}>
              {route.name}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen
        name='Homepage'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <Icons name="home" color={'#707070'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Dictionary'
        component={DictionaryPage}
        options={{
          tabBarIcon: ({ size }) => (
            <Icons name="book-open" color={'#707070'} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Dictionary" component={DictionaryPage} />
        <Stack.Screen name="WordPage" component={WordPage} options={{ title: 'Word' }} />
      </Stack.Navigator>
    </NavigationContainer>
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