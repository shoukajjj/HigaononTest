import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/Feather';
import Wordpage from './components/wordPage';
import DetailsPage from './components/detailsPage';

const HomeScreen = () => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        clearButtonMode="always"
        autoCapitalize='none'
      />
    </View>
  </SafeAreaView>
);

const DictionaryPage = ({ navigation }) => {
  const handleWordClick = (item) => {
    navigation.navigate('WordScreen', { item });
  };

  return (
    <View style={styles.container}>
      <Wordpage onWordClick={handleWordClick} />
    </View>
  );
};

const WordScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <DetailsPage route={route} />
    </View>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
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

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#440d0f" />
        <Text>Higaonon App is Loading</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DictionaryPage"
          component={DictionaryPage}
        />
        <Stack.Screen
          name="WordScreen"
          component={WordScreen}
          options={({ route }) => ({ title: route.params.item.word })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '70%',
    borderWidth:2,
    borderColor:'#373A40',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default App;
