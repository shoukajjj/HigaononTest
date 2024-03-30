import * as React from 'react';
import { StyleSheet, TextInput, View , Text} from 'react-native';
import DictionaryApp from './components/scrollDict';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/Feather';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
        />
      </View>
    </View>
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
        <Tab.Screen name='Dictionary Page' component={DictionaryPage} />
      </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Dictionary" component={DictionaryPage} />
      <Stack.Screen name="WordPage" component={WordPage} options={{ title: 'Word' }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    justifyContent: 'left',
    alignItems: 'center'
  },
  nav: {
    width: '90%',
    height: '50%',
    backgroundColor: 'red'
  },
  search: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '30%',
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
