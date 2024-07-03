import React, { useEffect } from 'react';
import { createTables, insertWord, getWords } from './database'; // Ensure these functions are correctly imported from your database module

const InsertWord = ({ setWords }) => {
  useEffect(() => {
    async function initializeDatabase() {
      await createTables();
      await insertWord('talikədan', 'likod', 'back', '[talikə`dan]', "'Ma'sakit su talikə'dan ku'", "‘Masakit ang likod ko.’");
      await insertWord("tulɁan", 'buto', 'bone', "['tulɁan]", "Nabali su 'tul-an ta balukan nu.", "‘Nabali ang buto sa bisig mo.’");
      await insertWord("taŋi'la", 'tainga', 'ear', "[taŋi'la]", "Mabuləd su tangi'la nu.", "‘Malapad ang tainga mo.’");
      await insertWord('mata', 'mata', 'eye', "['mata]", "Ada'gi su mata nu.", "‘Malaki ang mata mo.’");
      await insertWord('kilaj', 'kilay', 'eyebrow', "['kilaj]", "Maitəm su 'kilay nu.", "‘Maitim ang kilay mo.’");

      const fetchedWords = await getWords();
      setWords(fetchedWords);
    }

    initializeDatabase();
  }, [setWords]);

  return null; // This component doesn't need to render anything
};

export default InsertWord;
