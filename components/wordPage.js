import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


const WPage = ({ route }) => {

const {item} = route.params;
return(
      <View style= {styles.parentContainer}>
        <View>
          <Text>{item.gerund}</Text>
          <Text style={styles.mainWord}>{item.word}</Text>
          <Text>{item.pronounciation}</Text>
        </View>
        <View>
          <Text>Filipino: {item.tagalog}</Text>
          <Text>English: {item.english}</Text>
          <Text>Higaonon Sentence: {item.sentence1}</Text>
          <Text>Translated Sentence: {item.sentence2}</Text>
        </View>
      </View>
  );

  
};

const styles = StyleSheet.create({
    parentContainer: {
      position: 'absolute',
      left: 20, // paddingLeft corrected
      right: 20, // paddingright corrected
      top: '20%', // Adjust top positioning as needed
      bottom: 0, // Adjust bottom positioning as needed
      display: 'flex',
      flexDirection: 'column'
    
    },
    childContainer: {
      position: 'relative',
      // Optionally, you can add more styles here for childContainer
    },
    textStyle: {
      // Add styles for textStyle if needed
    },
    mainWord:{
        fontSize:80,
        fontWeight:800
    }
  });
export default WPage;