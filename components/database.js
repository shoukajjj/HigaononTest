import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('myDatabase.db');

export const createTables = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS words (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          word TEXT,
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

export const insertWord = (word, translation, definition, phonetic, example, translation_example) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO words (word, translation, definition, phonetic, example, translation_example) VALUES (?, ?, ?, ?, ?, ?)',
        [word, translation, definition, phonetic, example, translation_example],
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
