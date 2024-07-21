// database.js
import * as SQLite from 'expo-sqlite';
// const preloadedData = require('../assets/data.json');  // Make sure data.json is in the correct path

const db = SQLite.openDatabase('myDatabase.db');

export const createTables = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS words (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          word TEXT,
          part_of_speech TEXT,
          translation TEXT,
          definition TEXT,
          phonetic TEXT,
          example TEXT,
          translation_example TEXT
        );`,
        [],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
};

export const insertWord = (word, part_of_speech, translation, definition, phonetic, example, translation_example) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO words (word, part_of_speech, translation, definition, phonetic, example, translation_example) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [word, part_of_speech, translation, definition, phonetic, example, translation_example],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
};

export const getWords = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM words',
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      );
    });
  });
};

// export const preloadData = () => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql('SELECT COUNT(*) AS count FROM words', [], (_, { rows }) => {
//         if (rows.item(0).count === 0) {
//           const insertPromises = preloadedData.map(wordData => {
//             return insertWord(
//               wordData.word,
//               wordData.part_of_speech,
//               wordData.translation,
//               wordData.definition,
//               wordData.phonetic,
//               wordData.example,
//               wordData.translation_example
//             );
//           });

//           Promise.all(insertPromises)
//             .then(() => resolve())
//             .catch(error => reject(error));
//         } else {
//           resolve();
//         }
//       });
//     });
//   });
// };
