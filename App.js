import * as React from 'react';
import { StyleSheet, TextInput, View , Text} from 'react-native';
import {DictionaryApp,dictionaryData} from './components/scrollDict';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Feather';


function homeScreen() {
  return (
    <View style={styles.container}>
      <View style = {styles.search}>
        <TextInput
        style={styles.input}
        placeholder="Search..."
        />
      </View>
    </View>
    
  );
}
function dictionaryPage(){
  return(
    <View style={styles.container}>
      <View style = {styles.nav}>
        <DictionaryApp/>
      </View>
    </View>
  )
}
function wordPage (){
  return (
    <View>
      const word =  
    </View>
  )
}
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>{
      <Tab.Navigator
        screenOptions={({route}) => ({
        tabBarLabel: ({ focused }) => {
          let labelColor = focused ? '#212121' : '#868383'; 
          let labelWeight = focused ? '900' : 'thin'

          return (
            <Text style={{ color: labelColor, fontSize: 16 , fontWeight:labelWeight,}}>
              {route.name}
            </Text>
                  );
                        },
                    })}>
      <Tab.Screen 
        name='Home'
        component={homeScreen} 
        options={{
        tabBarIcon: ({ size }) => (
          <Icons name="home" color={'#707070'} size={size} />
        ),
        }}
      />

      <Tab.Screen 
        name='Dictionary Page'
        component={dictionaryPage} 
        options={{
        tabBarIcon: ({ size }) => (
          <Icons name="book-open" color={'#707070'} size={size} />
        ),
        title:'Dictionary Page',
        // headerShown:false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24
          },

        }}
      />
      <Tab.Screen

      />

      </Tab.Navigator>
    }</NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    borderColor:'red',
    flex: 1,
    justifyContent:'left',
    alignItems:'center'
  },
  nav:{
    width:'90%',
    height:'50%',
    backgroundColor:'red'
  },
  search:{
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'30%',
  },
  input:{
    width:'70%',
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  bottomButton:{
    width:'100%',
    height:'30%'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
}
);

export default App;