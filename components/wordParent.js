import React, { useState } from 'react';
import { View } from 'react-native';
import DictionaryApp from './scrollDict';

const ParentComponent = () => {
  const [selectedWord, setSelectedWord] = useState(null);

  const handleSelectedWordChange = (word) => {
    setSelectedWord(word);
  };

  return (
    <View>
      <DictionaryApp onWordClick={handleSelectedWordChange} />
      {selectedWord}
    </View>
  );
};

export default ParentComponent;
