import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DictionaryApp from './components/scrollDict';


export default function App() {
  return (
    <View style={styles.container}>
      <DictionaryApp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'left',
    justifyContent: 'center',
  },
});
