import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Feather'; // Adjust the icon library as per your actual library and icon names
import DictionaryPage from './dictionarypage';
import styles from '../style/dictstyle'
import { getWords } from '../database';

const Tab = createBottomTabNavigator();
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
  
const TabNavigator = ()=> {
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
  export default TabNavigator;