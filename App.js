import * as React from 'react';
import{ useState,useEffect } from 'react';
import { StyleSheet, TextInput, View , Text, SafeAreaView, ActivityIndicator, FlatList} from 'react-native';
import Wordpage from './components/wordPage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/Feather';
import _ from "lodash";



function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          clearButtonMode="always"
          autoCapitalize='none'
          // onChangeText={handleSearch}
          // value={searchQuery}
        />
      </View>
    </SafeAreaView>
  );
}

function DictionaryPage({ navigation }) {
  const handleWordClick = (item) => {
    navigation.navigate('WordPage', {item});
  };
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Wordpage/>
      </View>
    </View>
  );
}

function WordPage({ route }) {
  const { item } = route.params;
  const sentence1 = item.sentence1;
  
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <WPage onWordClick={(item) => handleWordClick(item)} />
      </View>
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
            ),}}/>
      </Tab.Navigator>
  );
}

function App() {
  
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
      <Stack.Screen name="Home" component={TabNavigator} options={{
        headerShown:false
      }
      }/>
      <Stack.Screen name="Dictionary" component={DictionaryPage} />
      <Stack.Screen name="WordPage" component={WordPage} options={{ title: 'Word' }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'center'
  },
  nav: {
    width: '90%',
    height: '100%'
    // backgroundColor: 'red'
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
